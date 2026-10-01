import { PrismaClient } from '../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

function createPrismaClientForSeeding() {
  const connectionString =
    process.env.CRM_DATABASE_DIRECT_URL ?? process.env.CRM_DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      'CRM_DATABASE_DIRECT_URL or CRM_DATABASE_URL must be set for PrismaPg adapter.',
    );
  }

  const pool = new Pool({
    connectionString,
    max: 1,
    connectionTimeoutMillis: 5_000,
    idleTimeoutMillis: 30_000,
    keepAlive: true,
    allowExitOnIdle: true,
  });
  return new PrismaClient({ adapter: new PrismaPg(pool) });
}

async function main() {
  const prisma = createPrismaClientForSeeding();
  try {
    const tenant = await prisma.crmTenant.upsert({
      where: { slug: 'demo-salon' },
      update: {},
      create: {
        slug: 'demo-salon',
        displayName: 'Demo Beauty Salon',
        timezone: 'Europe/Moscow',
      },
    });

    // userId 1 = admin@comfort.local, userId 2 = demo@comfort.local from CMS seed
    for (const userId of [BigInt(1), BigInt(2)]) {
      await prisma.crmTenantMember.upsert({
        where: { tenantId_userId: { tenantId: tenant.id, userId } },
        update: {},
        create: { tenantId: tenant.id, userId, role: 'owner' },
      });
    }

    const existingContact = await prisma.crmContact.findFirst({
      where: { tenantId: tenant.id, email: 'client@example.com' },
    });
    const contact =
      existingContact ??
      (await prisma.crmContact.create({
        data: {
          tenantId: tenant.id,
          fullName: 'Анна Клиентова',
          phone: '+7 900 000-00-01',
          email: 'client@example.com',
          notes: 'Постоянный клиент',
        },
      }));

    const existingService = await prisma.crmService.findFirst({
      where: { tenantId: tenant.id, name: 'Стрижка + укладка' },
    });
    const service =
      existingService ??
      (await prisma.crmService.create({
        data: {
          tenantId: tenant.id,
          name: 'Стрижка + укладка',
          durationMin: 90,
          priceRub: 3500,
          active: true,
        },
      }));

    const existingAppointment = await prisma.crmAppointment.findFirst({
      where: { tenantId: tenant.id, contactId: contact.id, serviceId: service.id },
    });
    if (!existingAppointment) {
      await prisma.crmAppointment.create({
        data: {
          tenantId: tenant.id,
          contactId: contact.id,
          serviceId: service.id,
          startsAt: new Date(Date.now() + 86400000),
          notes: 'Первый визит после регистрации',
        },
      });
    }

    console.log('CRM seed ok, tenant=', tenant.slug);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error('CRM seed failed:', error);
  process.exit(1);
});
