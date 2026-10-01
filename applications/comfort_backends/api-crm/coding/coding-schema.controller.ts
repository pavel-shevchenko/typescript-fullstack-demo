import { Controller, Get } from 'domain_unified/nest-for-hono';
import { apiCrmModels } from 'types_consts_utils';

const CRM_DMMF: Record<string, { fields: string[]; relations: string[] }> = {
  crmTenant: { fields: ['slug', 'displayName', 'timezone'], relations: ['Members', 'Contacts', 'Services', 'Appointments'] },
  crmTenantMember: { fields: ['tenantId', 'userId', 'role'], relations: ['Tenant'] },
  crmContact: { fields: ['tenantId', 'fullName', 'phone', 'email', 'notes'], relations: ['Tenant', 'Appointments'] },
  crmService: { fields: ['tenantId', 'name', 'durationMin', 'priceRub', 'active'], relations: ['Tenant', 'Appointments'] },
  crmAppointment: { fields: ['tenantId', 'contactId', 'serviceId', 'startsAt', 'notes'], relations: ['Tenant', 'Contact', 'Service'] },
};

@Controller('public/coding')
export class CodingSchemaController {
  @Get('schema')
  schema() {
    return {
      microservice: 'api-crm',
      models: Object.values(apiCrmModels),
      dmmf: CRM_DMMF,
      allowedOperations: [
        'prisma-get-many',
        'prisma-create-many',
        'prisma-update-many',
        'prisma-delete-many',
      ],
      note: 'Tenant isolation через CrmTenantMember.userId.',
    };
  }
}
