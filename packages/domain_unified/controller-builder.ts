import {
  type IDomainControllerFactoryOpts,
  type IDomainController,
} from './types/controller-builder.interface';
import { type AllMicroservicesModels } from './types/domain-unified.types';
import {
  DomainControllerBase,
  type DomainControllerConstructor,
  type DomainControllerMixinBase,
} from './domain-controller-base';
import {
  prismaCreateManyControllerFactory,
  prismaDeleteManyControllerFactory,
  prismaGetManyControllerFactory,
  prismaUpdateManyControllerFactory,
} from './crud/controller-factory';
import {
  downloadFilesByFieldsControllerFactory,
  listFilesMetadataByFieldsControllerFactory,
  removeFilesByFieldsControllerFactory,
  uploadFilesToFieldsControllerFactory,
} from './file/controller-factory';
import { mixin, type Type } from './nest-for-hono/decorators';
import { type AnyApiPrismaService } from 'types_consts_utils';
import { registerDomainIncludeGraph } from './include-graph';

export const buildDomainController = <
  DomainControllerLayer extends IDomainController,
  ModelLiteralCamelCase extends AllMicroservicesModels = AllMicroservicesModels,
  PrismaService = AnyApiPrismaService,
  StorageService = unknown,
>(
  options: IDomainControllerFactoryOpts<ModelLiteralCamelCase>,
): DomainControllerConstructor<
  DomainControllerLayer,
  PrismaService,
  StorageService
> => {
  let builtController: Type<
    DomainControllerMixinBase<AnyApiPrismaService, unknown>
  > = getInitController();

  const opts = options as unknown as IDomainControllerFactoryOpts;
  registerDomainIncludeGraph({
    microService: options.microService,
    prismaModel: options.prismaModel as string,
    includePermissions: options.includePermissions,
  });
  if (!!options?.prismaGetMany)
    builtController = prismaGetManyControllerFactory(builtController, opts);
  if (!!options?.prismaCreateMany)
    builtController = prismaCreateManyControllerFactory(builtController, opts);
  if (!!options?.prismaUpdateMany)
    builtController = prismaUpdateManyControllerFactory(builtController, opts);
  if (!!options?.prismaDeleteMany)
    builtController = prismaDeleteManyControllerFactory(builtController, opts);
  if (!!options?.uploadFilesToFields)
    builtController = uploadFilesToFieldsControllerFactory(builtController, opts);
  if (!!options?.listFilesMetadataByFields)
    builtController = listFilesMetadataByFieldsControllerFactory(builtController, opts);
  if (!!options?.downloadFilesByFields)
    builtController = downloadFilesByFieldsControllerFactory(builtController, opts);
  if (!!options?.removeFilesByFields)
    builtController = removeFilesByFieldsControllerFactory(builtController, opts);

  return builtController as DomainControllerConstructor<
    DomainControllerLayer,
    PrismaService,
    StorageService
  >;
};

const getInitController = <
  PrismaService = AnyApiPrismaService,
  StorageService = unknown,
  >(): Type<
    DomainControllerMixinBase<PrismaService, StorageService>
  > => {
  class EmptyDomainController extends DomainControllerBase<
    PrismaService,
    StorageService
  > {}

  return mixin(EmptyDomainController) as Type<
    DomainControllerMixinBase<PrismaService, StorageService>
  >;
};
