import { type Request as ExpressRequest } from 'express';
import {
  type AnyClass,
  apiCmsModels,
  apiCrmModels,
  apiSearchModels,
  type ApiCmsModels,
  type ApiCrmModels,
  type ApiSearchModels,
  type ApiMicroservices,
  type IApiRequest,
  type AnyApiPrismaService,
  type IncludePermissionsByRole,
} from 'types_consts_utils';
import { type AllMicroservicesModels } from './domain-unified.types';
import { type ApiCmsPrismaModels } from 'prisma_cms';
import { type ApiCrmPrismaModels } from 'prisma_crm';
import { type ApiSearchPrismaModels } from 'prisma_search';
import { type IPrismaFindManyAndCountReturn } from 'types_consts_utils/server';
import { type DomainUnifiedRequest } from './domain-unified-request';

type CamelToPascalCms<ModelLiteralCamelCase extends ApiCmsModels> = {
  [ModelLiteralPascalCase in keyof typeof apiCmsModels]: (typeof apiCmsModels)[ModelLiteralPascalCase] extends ModelLiteralCamelCase
    ? ModelLiteralPascalCase
    : never;
}[keyof typeof apiCmsModels];

type CamelToPascalCrm<ModelLiteralCamelCase extends ApiCrmModels> = {
  [ModelLiteralPascalCase in keyof typeof apiCrmModels]: (typeof apiCrmModels)[ModelLiteralPascalCase] extends ModelLiteralCamelCase
    ? ModelLiteralPascalCase
    : never;
}[keyof typeof apiCrmModels];

type CamelToPascalSearch<ModelLiteralCamelCase extends ApiSearchModels> = {
  [ModelLiteralPascalCase in keyof typeof apiSearchModels]: (typeof apiSearchModels)[ModelLiteralPascalCase] extends ModelLiteralCamelCase
    ? ModelLiteralPascalCase
    : never;
}[keyof typeof apiSearchModels];

export type FieldsOfModel<ModelLiteralCamelCase extends AllMicroservicesModels> =
  ModelLiteralCamelCase extends ApiCmsModels
    ? Extract<
        keyof ApiCmsPrismaModels[
          Extract<
            CamelToPascalCms<ModelLiteralCamelCase>,
            keyof ApiCmsPrismaModels
          >
        ],
        string
      >
    : ModelLiteralCamelCase extends ApiCrmModels
      ? Extract<
          keyof ApiCrmPrismaModels[
            Extract<
              CamelToPascalCrm<ModelLiteralCamelCase>,
              keyof ApiCrmPrismaModels
            >
          ],
          string
        >
      : ModelLiteralCamelCase extends ApiSearchModels
        ? Extract<
            keyof ApiSearchPrismaModels[
              Extract<
                CamelToPascalSearch<ModelLiteralCamelCase>,
                keyof ApiSearchPrismaModels
              >
            ],
            string
          >
      : never;

export interface IDomainController {
  prismaGetMany?(
    req: IApiRequest | ExpressRequest,
  ): Promise<IPrismaFindManyAndCountReturn<unknown>>;
  prismaCreateMany?(req: IApiRequest | ExpressRequest): unknown;
  prismaUpdateMany?(req: IApiRequest | ExpressRequest): unknown;
  prismaDeleteMany?(req: IApiRequest | ExpressRequest): unknown;
  uploadFilesToFields?(req: IApiRequest | ExpressRequest): void;
  listFilesMetadataByFields?(req: IApiRequest | ExpressRequest): unknown;
  downloadFilesByFields?(req: IApiRequest | ExpressRequest): unknown;
  removeFilesByFields?(req: IApiRequest | ExpressRequest): unknown;
}

export type TCheckPermissionsAndGetScope = (
  req: DomainUnifiedRequest,
  prismaClient?: AnyApiPrismaService,
) => Promise<Record<string, unknown>>;

export interface IValidateRelationConfig<
  ModelLiteralCamelCase extends AllMicroservicesModels = AllMicroservicesModels,
> {
  relationModel: AllMicroservicesModels;
  relationIdField: FieldsOfModel<ModelLiteralCamelCase>;
  resolveScope: TCheckPermissionsAndGetScope;
}

export type IDomainControllerFactoryOpts<
  ModelLiteralCamelCase extends AllMicroservicesModels = AllMicroservicesModels,
> = {
  microService: ApiMicroservices;
  prismaModel: ModelLiteralCamelCase;
  dtoClass?: AnyClass;
  includePermissions?: IncludePermissionsByRole<Record<string, unknown>>;
  prismaAutoCacheInvalidation?: { enabled: boolean };
  /** Comfort demo: авто-индексация CMS/CRM сущностей в search PostgreSQL после мутаций. */
  comfortSearchSync?: boolean;
  prismaCreateMany?: {
    checkPermissions: TCheckPermissionsAndGetScope;
    methodDecorators?: Array<MethodDecorator>;
    validateRelations?: IValidateRelationConfig<ModelLiteralCamelCase>[];
    sanitizeOwnerIdField?: FieldsOfModel<ModelLiteralCamelCase>;
  };
  prismaGetMany?: {
    checkPermAndGetScope: TCheckPermissionsAndGetScope;
    methodDecorators?: Array<MethodDecorator>;
  };
  prismaUpdateMany?: {
    checkPermAndGetScope: TCheckPermissionsAndGetScope;
    methodDecorators?: Array<MethodDecorator>;
    validateRelations?: IValidateRelationConfig<ModelLiteralCamelCase>[];
    immutableFields?: readonly FieldsOfModel<ModelLiteralCamelCase>[];
    sanitizeOwnerIdField?: FieldsOfModel<ModelLiteralCamelCase>;
  };
  prismaDeleteMany?: {
    checkPermAndGetScope: TCheckPermissionsAndGetScope;
    methodDecorators?: Array<MethodDecorator>;
  };
  uploadFilesToFields?: {
    fieldNames: readonly string[];
    checkPermAndGetScope: TCheckPermissionsAndGetScope;
    methodDecorators?: Array<MethodDecorator>;
    acceptedMimeTypes?: readonly string[];
    maxFileBytes?: number;
  };
  listFilesMetadataByFields?: {
    fieldNames: readonly string[];
    checkPermAndGetScope: TCheckPermissionsAndGetScope;
    methodDecorators?: Array<MethodDecorator>;
  };
  downloadFilesByFields?: {
    fieldNames: readonly string[];
    checkPermAndGetScope: TCheckPermissionsAndGetScope;
    methodDecorators?: Array<MethodDecorator>;
  };
  removeFilesByFields?: {
    fieldNames: readonly string[];
    checkPermAndGetScope: TCheckPermissionsAndGetScope;
    methodDecorators?: Array<MethodDecorator>;
  };
};
