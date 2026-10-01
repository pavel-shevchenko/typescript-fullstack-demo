import { PrismaClient } from '../generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

function createPrismaClientForSeeding() {
  const connectionString =
    process.env.CMS_DATABASE_DIRECT_URL ?? process.env.CMS_DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      'CMS_DATABASE_DIRECT_URL or CMS_DATABASE_URL must be set for PrismaPg adapter.',
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
    const passwordHash = await bcrypt.hash('comfort123', 10);

    const admin = await prisma.user.upsert({
      where: { email: 'admin@comfort.local' },
      update: {},
      create: {
        email: 'admin@comfort.local',
        passwordHash,
        role: 'admin',
      },
    });

    await prisma.user.upsert({
      where: { email: 'demo@comfort.local' },
      update: {},
      create: {
        email: 'demo@comfort.local',
        passwordHash,
        role: 'customer',
      },
    });

    await prisma.cmsPage.upsert({
      where: { slug: 'home' },
      update: {},
      create: {
        slug: 'home',
        title: 'Comfort — AI-first CMS + CRM',
        summary: 'Лендинг и промо.',
        bodyMarkdown:
          '# Добро пожаловать\n\nЕдиная админка: контент (CMS) и салоны (CRM). Регистрация без почты.',
        published: true,
        sortOrder: 0,
      },
    });

    await prisma.cmsArticle.upsert({
      where: { slug: 'getting-started' },
      update: {},
      create: {
        slug: 'getting-started',
        title: 'Быстрый старт',
        excerpt: 'docker compose up и admin@comfort.local / comfort123',
        bodyMarkdown: 'Подтверждаемые AI-рекомендации вместо batch-команд.',
        published: true,
      },
    });

    await prisma.cmsPromoBlock.upsert({
      where: { code: 'hero-main' },
      update: {},
      create: {
        code: 'hero-main',
        headline: 'Управляйте CMS и CRM одним интерфейсом',
        subline: 'Python coding-сервис готовит артефакты без полного redeploy.',
        ctaLabel: 'В админку',
        ctaHref: '/admin',
        active: true,
      },
    });

    await prisma.cmsAiPromptSlot.upsert({
      where: { code: 'recommend-default' },
      update: {
        systemPrompt:
          'Ты помощник Comfort CMS+CRM. Возвращай только whitelisted prisma-операции.',
      },
      create: {
        code: 'recommend-default',
        title: 'Рекомендации по умолчанию',
        systemPrompt:
          'Ты помощник Comfort CMS+CRM. Возвращай только whitelisted prisma-операции.',
        userPromptTemplate: '{{prompt}}',
        active: true,
      },
    });

    await prisma.comfortAuditEvent.createMany({
      data: [
        {
          actorUserId: admin.id,
          action: 'seed_bootstrap',
          entityModel: 'cmsPage',
          entityId: 'home',
          payloadJson: { note: 'stage-2 seed' },
          correlationId: 'seed-init',
        },
      ],
      skipDuplicates: true,
    });

    console.log('CMS seed ok, admin id=', admin.id.toString());
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error('CMS seed failed:', error);
  process.exit(1);
});
