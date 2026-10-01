import { type IDomainController } from './types/controller-builder.interface';
import { type AnyApiPrismaService } from 'types_consts_utils';

/**
 * Тип конструктора доменного контроллера: требует обязательно prisma, возможно storage (SeaweedFS S3).
 * Тип экземпляра явно включает наследника DomainControllerBase с дженериками PrismaService и StorageService.
 */
export type DomainControllerConstructor<
  T extends IDomainController = IDomainController,
  PrismaService = AnyApiPrismaService,
  StorageService = unknown,
> = new (
  prisma: PrismaService,
  storage?: StorageService,
) => T & DomainControllerBase<PrismaService, StorageService>;

/**
 * Родительский класс для доменных контроллеров, собранных через buildDomainController.
 * Один раз задаёт присвоение Prisma- и storage-сервисов в защищённые поля;
 * контроллеры только вызывают super(prisma) или super(prisma, storage).
 *
 * @param PrismaService — тип клиента Prisma (по умолчанию AnyApiPrismaService)
 * @param StorageService — тип сервиса объектного хранилища (SeaweedFS S3; по умолчанию unknown)
 */
export abstract class DomainControllerBase<
  PrismaService = AnyApiPrismaService,
  StorageService = unknown,
> {
  protected prismaClient!: PrismaService;
  protected storageService!: StorageService | null;

  constructor(prisma: PrismaService, storage?: StorageService) {
    this.prismaClient = prisma;
    this.storageService = storage ?? null;
  }
}

/**
 * Тип для аргумента extend в миксинах фабрик: контроллер с DomainControllerBase,
 * чтобы внутри миксина prismaClient и storageService были типизированы через этот класс.
 */
export type DomainControllerMixinBase<
  PrismaService = AnyApiPrismaService,
  StorageService = unknown,
> = IDomainController &
  DomainControllerBase<PrismaService, StorageService>;
