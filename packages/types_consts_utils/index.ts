import type { IncludePermissionsTree } from './utils/prisma-include-guard';

export type ObjectValuesTypesUnion<T extends Record<string, string>> = T[keyof T];

export const apiMicroservices = {
  apiCms: 'api-cms',
  apiCrm: 'api-crm',
  apiSearch: 'api-search',
} as const;

export type ApiMicroservices = ObjectValuesTypesUnion<typeof apiMicroservices>;

export const apiCmsModels = {
  user: 'user',
  cmsPage: 'cmsPage',
  cmsArticle: 'cmsArticle',
  cmsPromoBlock: 'cmsPromoBlock',
  cmsAiPromptSlot: 'cmsAiPromptSlot',
  comfortAuditEvent: 'comfortAuditEvent',
  comfortAiCallLog: 'comfortAiCallLog',
  comfortAiRecommendation: 'comfortAiRecommendation',
} as const;

export type ApiCmsModels = ObjectValuesTypesUnion<typeof apiCmsModels>;

export const apiCrmModels = {
  crmTenant: 'crmTenant',
  crmTenantMember: 'crmTenantMember',
  crmContact: 'crmContact',
  crmService: 'crmService',
  crmAppointment: 'crmAppointment',
} as const;

export type ApiCrmModels = ObjectValuesTypesUnion<typeof apiCrmModels>;

export const apiSearchModels = {
  searchDocument: 'searchDocument',
  searchChunk: 'searchChunk',
  searchEmbedding: 'searchEmbedding',
  searchIndexJob: 'searchIndexJob',
} as const;

export type ApiSearchModels = ObjectValuesTypesUnion<typeof apiSearchModels>;

export type AllMicroservicesModels =
  | ApiCmsModels
  | ApiCrmModels
  | ApiSearchModels;

export type IncludePermissionsByRole<TInclude> = {
  admin: IncludePermissionsTree<TInclude>;
  customer: Exclude<IncludePermissionsTree<TInclude>, true>;
};

export type AnyClass = new (...args: unknown[]) => object;

export type AnyApiPrismaService = {
  [K in AllMicroservicesModels]: {
    findMany: (...args: unknown[]) => Promise<unknown>;
    createManyAndReturn: (...args: unknown[]) => Promise<unknown>;
    updateManyAndReturn: (...args: unknown[]) => Promise<unknown>;
    deleteMany: (...args: unknown[]) => Promise<unknown>;
  };
};

export interface PassportUserPayload {
  id: bigint;
  role: 'admin' | 'customer';
  email: string;
}

export interface IApiRequest {
  user?: { data: PassportUserPayload };
  // Express and the generated Prisma request contracts refine this per handler.
  // `any` keeps access callbacks contravariant with the Nest Request type.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  headers: Record<string, string | string[] | undefined>;
  ip?: string;
  method?: string;
  originalUrl?: string;
  path?: string;
  baseUrl?: string;
  route?: { path?: string };
}

export function defineBigIntToJson() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (BigInt.prototype as any).toJSON = function toJSON() {
    return this.toString();
  };
}

export * from './utils/prisma-include-guard';
export * from './utils/database-id';
export * from './utils/dto-validator';

export type UserRole = 'admin' | 'customer';
