import { Module } from 'domain_unified/nest-for-hono';
import { ApiCrmPrismaService } from 'prisma_crm';
import { CrmAppointmentController } from './crm/crm-appointment.controller';
import { CrmContactController } from './crm/crm-contact.controller';
import { CrmServiceController } from './crm/crm-service.controller';
import { CrmTenantMemberController } from './crm/crm-tenant-member.controller';
import { CrmTenantController } from './crm/crm-tenant.controller';

@Module({
  controllers: [
    CrmTenantController,
    CrmTenantMemberController,
    CrmContactController,
    CrmServiceController,
    CrmAppointmentController,
  ],
  providers: [ApiCrmPrismaService],
})
export class CrmDomainUnifiedModule {}
