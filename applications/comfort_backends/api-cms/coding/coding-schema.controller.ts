import { Controller, Get } from 'domain_unified/nest-for-hono';
import { apiCmsModels } from 'types_consts_utils';

const CMS_DMMF: Record<string, { fields: string[]; relations: string[] }> = {
  cmsPage: { fields: ['slug', 'title', 'summary', 'bodyMarkdown', 'published', 'sortOrder'], relations: [] },
  cmsArticle: { fields: ['slug', 'title', 'excerpt', 'bodyMarkdown', 'published', 'heroImageKey'], relations: [] },
  cmsPromoBlock: { fields: ['code', 'headline', 'subline', 'ctaLabel', 'ctaHref', 'active'], relations: [] },
  cmsAiPromptSlot: { fields: ['code', 'title', 'systemPrompt', 'userPromptTemplate', 'active'], relations: [] },
  comfortAiRecommendation: {
    fields: ['targetService', 'title', 'explanation', 'payloadJson', 'status', 'requiresAdminConfirm'],
    relations: ['Author', 'Confirmer'],
  },
  comfortAuditEvent: { fields: ['action', 'entityModel', 'entityId', 'payloadJson', 'correlationId'], relations: [] },
};

@Controller('public/coding')
export class CodingSchemaController {
  @Get('schema')
  schema() {
    return {
      microservice: 'api-cms',
      models: Object.values(apiCmsModels),
      dmmf: CMS_DMMF,
      allowedOperations: [
        'prisma-get-many',
        'prisma-create-many',
        'prisma-update-many',
        'prisma-delete-many',
      ],
      note: 'Tenant не используется в CMS RBAC; только admin/customer.',
    };
  }
}
