import {
  type Type,
  Post,
  Request,
  BadRequestException,
  applyDecorators,
  InternalServerErrorException,
  NotFoundException,
  HttpException,
  UseGuards,
} from '../nest-for-hono/decorators';
import { throwIfUserBlocked } from './../utils';
import {
  type IDomainControllerFactoryOpts,
  type IDomainController,
} from '../types/controller-builder.interface';
import { type DomainControllerMixinBase } from '../domain-controller-base';
import { type AnyApiPrismaService } from 'types_consts_utils';
import { type Request as ExpressRequest } from 'express';
import { type IApiRequest } from 'types_consts_utils';
import {
  type IFileMeta,
  type IFileData,
  type IDomainUnifiedFilesConfig,
  methodsCodes,
} from '../types/domain-unified.types';
import { Readable, Transform } from 'node:stream';
import { randomUUID } from 'node:crypto';
import busboy from 'busboy';
import { flushCacheAfterMutationIfConfigured } from '../utils';
import { PassportUserThrottlerGuard } from '../throttler/passport-user-throttler.guard';
import { type DomainUnifiedRequest } from '../types/domain-unified-request';
import { selectFileMetadataFields } from './file-metadata';

const DEFAULT_MAX_UPLOAD_FILE_BYTES = 25 * 1024 * 1024;

const asDomainRequest = (
  req: IApiRequest | ExpressRequest,
): DomainUnifiedRequest => req as unknown as DomainUnifiedRequest;

function maxUploadFileBytes(): number {
  const raw = process.env.DOMAIN_UNIFIED_MAX_UPLOAD_FILE_BYTES;
  const parsed = raw ? Number.parseInt(raw, 10) : NaN;
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_MAX_UPLOAD_FILE_BYTES;
}

// Файл, загруженный в хранилище во время парсинга multipart (стрим без буфера в памяти).
interface IParsedUploadedFile {
  recordId: string;
  fieldName: string;
  fileIndex: string;
  fieldname: string;
  filename: string;
  encoding: string;
  mimetype: string;
  size: number;
  objectName: string;
}

// Результат парсинга multipart/form-data: Record<recordId, Record<fieldName, Record<fileIndex, IParsedUploadedFile>>>
type IFileByPath = Record<
  string,
  Record<string, Record<string, IParsedUploadedFile>>
>;

/** Минимальный контракт хранилища файлов для domain-unified. */
interface IStorageServiceLike {
  putObject(
    objectName: string,
    stream: Readable | string,
    contentLength?: number,
    contentType?: string,
  ): Promise<void>;
  getObject(objectName: string): Promise<Readable>;
  getObjectAsBase64(objectName: string): Promise<string>;
  removeObjects(objectNames: string[]): Promise<void>;
}

function collectObjectNamesFromFileByPath(
  fileByPath: IFileByPath,
  recordIds?: Iterable<string | number>,
): string[] {
  const filter =
    recordIds == null
      ? null
      : new Set([...recordIds].map((id) => String(id)));
  const names: string[] = [];
  for (const recordId of Object.keys(fileByPath)) {
    if (filter && !filter.has(recordId)) continue;
    const filesByField = fileByPath[recordId];
    if (!filesByField) continue;
    for (const fieldName of Object.keys(filesByField)) {
      for (const file of Object.values(filesByField[fieldName] ?? {})) {
        if (file.objectName) names.push(file.objectName);
      }
    }
  }
  return names;
}

async function rollbackUploadedObjects(
  storage: IStorageServiceLike,
  objectNames: string[],
): Promise<void> {
  if (!objectNames.length) return;
  try {
    await storage.removeObjects(objectNames);
  } catch (error) {
    console.error('Failed to rollback uploaded files:', error);
  }
}

export const uploadFilesToFieldsControllerFactory = (
  extend: Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>>,
  options: IDomainControllerFactoryOpts,
): Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>> => {
  class DomainControllerLayer extends extend implements IDomainController {
    @Post(methodsCodes.uploadFilesToFields)
    @applyDecorators(
      ...(options.uploadFilesToFields?.methodDecorators || []),
      UseGuards(PassportUserThrottlerGuard)
    )
    async uploadFilesToFields(@Request() req: IApiRequest | ExpressRequest) {
      throwIfUserBlocked(req);
      const scope = await options.uploadFilesToFields?.checkPermAndGetScope(
        asDomainRequest(req),
        this.prismaClient,
      );

      if (!this.storageService) {
        console.error(
          'SeaweedfsStorageService не доступен! Проверьте регистрацию и импорт модуля SeaweedfsModule.',
        );
        throw new BadRequestException('Storage service is not available');
      }

      // Стримим файлы в хранилище во время парсинга; scope/поля проверяем после, безправные — удаляем
      const allowedFields = options.uploadFilesToFields?.fieldNames || [];
      const fileByPath = await this.parseMultipartAndStreamUpload(
        req as ExpressRequest,
        options.prismaModel,
        allowedFields,
        options.uploadFilesToFields?.acceptedMimeTypes ?? [],
        options.uploadFilesToFields?.maxFileBytes,
      );

      const objectsToRollback: string[] = [];
      const storage = this.storageService as IStorageServiceLike;

      // Проверяем наличие файлов
      if (!fileByPath || Object.keys(fileByPath).length === 0) {
        throw new BadRequestException('No files to upload');
      }

      const prismaModelClient = (this.prismaClient as unknown as Record<string, unknown>)[
        options.prismaModel
      ] as {
        findMany: (args: unknown) => Promise<unknown[]>;
        update: (args: unknown) => Promise<unknown>;
      };
      const recordIds = Object.keys(fileByPath);
      const prismaRecordIds = recordIds.map((id) => BigInt(id));

      // Проверяем, есть ли записи с такими ID в указанном scope
      const records = await prismaModelClient.findMany({
        where: {
          ...scope,
          id: { in: prismaRecordIds },
        },
      });

      if (!records || records.length === 0) {
        await rollbackUploadedObjects(
          storage,
          collectObjectNamesFromFileByPath(fileByPath),
        );
        throw new BadRequestException(
          `No records found with ids ${recordIds.join(', ')} or access denied!`,
        );
      }

      // Создаем словарь записей и найденных ID для быстрого доступа
      const recordsById = new Map(
        records.map((r) => [String((r as { id?: unknown } | null)?.id), r]),
      );
      const foundRecordIds = new Set(
        records.map((r) => String((r as { id?: unknown } | null)?.id)),
      );

      const missingIds = recordIds.filter((id) => !foundRecordIds.has(id));
      if (missingIds.length > 0) {
        console.warn(
          `Some records not found or access denied: ${missingIds.join(', ')}`,
        );
        await rollbackUploadedObjects(
          storage,
          collectObjectNamesFromFileByPath(fileByPath, missingIds),
        );
      }

      // Результаты обработки
      const results: {
        id?: string;
        updated: number;
        field?: string;
        index?: number;
        record?: unknown;
        message?: string;
        error?: string;
        skipped?: boolean;
      }[] = [];

      // Обрабатываем каждую запись
      for (const recordId of recordIds) {
        const filesByField = fileByPath[recordId];
        if (!filesByField) continue;

        if (!foundRecordIds.has(recordId)) {
          continue;
        }

        const record = recordsById.get(recordId);

        // Группируем файлы по полям для обновления
        const updatesByField: Record<string, Map<number, IFileMeta>> = {};

        // Обрабатываем каждое поле с файлами
        for (const fieldName of Object.keys(filesByField)) {
          const filesByIndex = filesByField[fieldName];
          if (!filesByIndex || Object.keys(filesByIndex).length === 0) continue;

          // Получаем существующие метаданные файлов
          const fieldValue = (record as Record<string, any>)[fieldName];
          const existingMeta = Array.isArray(fieldValue)
            ? fieldValue
            : fieldValue === null || fieldValue === '[]'
              ? []
              : (console.warn(`Unexpected format for field ${fieldName}`), []);

          // Обрабатываем каждый файл по индексу
          for (const indexStr of Object.keys(filesByIndex)) {
            const fileIndex = indexStr === '-1' ? -1 : parseInt(indexStr);
            const file = filesByIndex[indexStr];

            // Проверяем существование файла по индексу
            if (
              fileIndex >= 0 &&
              fileIndex < existingMeta.length &&
              existingMeta[fileIndex] &&
              typeof existingMeta[fileIndex] === 'object' &&
              typeof existingMeta[fileIndex].objectName === 'string' &&
              typeof existingMeta[fileIndex].originalName === 'string' &&
              typeof existingMeta[fileIndex].mimetype === 'string'
            ) {
              objectsToRollback.push(file.objectName);
              results.push({
                id: recordId,
                field: fieldName,
                index: fileIndex,
                updated: 0,
                skipped: true,
                message: `File at index ${fileIndex} already exists - upload skipped to prevent overwriting`,
              });
              continue;
            }

            try {
              const objectName = file.objectName;

              const metaData: IFileMeta = {
                fieldName,
                originalName: file.filename,
                objectName,
                mimetype: file.mimetype,
                size: file.size,
              };

              // Подготавливаем обновление для поля
              if (!updatesByField[fieldName]) {
                updatesByField[fieldName] = new Map();
              }

              // Определяем финальный индекс для добавления
              const finalIndex =
                fileIndex === -1 ? existingMeta.length : fileIndex;
              updatesByField[fieldName].set(finalIndex, metaData);

              results.push({
                id: recordId,
                field: fieldName,
                index: finalIndex,
                updated: 1,
                message: `File uploaded successfully at index ${finalIndex}`,
              });
            } catch (error) {
              objectsToRollback.push(file.objectName);
              console.error(
                `Error processing uploaded file for record ${recordId}, field ${fieldName}:`,
                error,
              );
              results.push({
                id: recordId,
                field: fieldName,
                index: fileIndex,
                updated: 0,
                error: `Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}`,
              });
            }
          }
        }

        // Формируем данные для обновления
        const updateData: Record<string, IFileMeta[]> = {};
        for (const [fieldName, indexMap] of Object.entries(updatesByField)) {
          // Получаем существующие метаданные
          const fieldValue = (record as Record<string, any>)[fieldName];
          const existingMeta = Array.isArray(fieldValue) ? [...fieldValue] : [];

          // Добавляем/обновляем метаданные по индексам
          for (const [index, metaData] of indexMap.entries()) {
            if (index >= existingMeta.length) {
              // Добавляем в конец
              existingMeta.push(metaData);
            } else {
              // Обновляем по индексу
              existingMeta[index] = metaData;
            }
          }

          updateData[fieldName] = existingMeta;
        }

        // Обновляем запись, если есть изменения
        if (Object.keys(updateData).length > 0) {
          try {
            const updated = await prismaModelClient.update({
              where: { id: BigInt(recordId) },
              data: updateData,
            });

            results.push({
              id: recordId,
              updated: 1,
              record: updated,
              message: 'Record updated successfully',
            });
          } catch (error) {
            console.error(`Error updating record ${recordId}:`, error);
            for (const indexMap of Object.values(updatesByField)) {
              for (const metaData of indexMap.values()) {
                objectsToRollback.push(metaData.objectName);
              }
            }
            results.push({
              id: recordId,
              updated: 0,
              error: `Failed to update record: ${error instanceof Error ? error.message : 'Unknown error'}`,
            });
          }
        }
      }

      if (objectsToRollback.length > 0) {
        await rollbackUploadedObjects(storage, objectsToRollback);
      }

      flushCacheAfterMutationIfConfigured(this.prismaClient, options);

      return {
        updated: results.filter((r) => r.updated > 0 && !r.skipped).length,
        skipped: results.filter((r) => r.skipped).length,
        results,
      };
    }

    private async parseMultipartAndStreamUpload(
      req: ExpressRequest,
      prismaModel: string,
      allowedFields: readonly string[],
      acceptedMimeTypes: readonly string[],
      configuredMaxBytes?: number,
    ): Promise<IFileByPath> {
      const maxBytes =
        configuredMaxBytes && configuredMaxBytes > 0
          ? configuredMaxBytes
          : maxUploadFileBytes();
      const storage = this.storageService as IStorageServiceLike;

      return new Promise((resolve, reject) => {
        try {
          const contentType = req.headers['content-type'] || '';

          if (!contentType.includes('multipart/form-data')) {
            return reject(new BadRequestException('Expected multipart/form-data'));
          }

          const busboyInstance = busboy({
            headers: req.headers,
            limits: { fileSize: maxBytes },
          });
          const fileByPath: IFileByPath = {};
          const pendingUploads: Promise<void>[] = [];

          busboyInstance.on('file', (fieldname, file, info) => {
            const { filename, encoding, mimeType } = info;
            const fieldMatch = fieldname.match(
              /fileByRecordIdAndFieldNameAndFileIndex\[(\d+)\]\[([^\]]+)\](?:\[(\d*)\])?/,
            );

            if (!fieldMatch) {
              console.warn(`Skipping file with unsupported format: ${fieldname}`);
              file.resume();
              return;
            }

            const recordId = fieldMatch[1]!;
            const fieldName = fieldMatch[2]!;
            const fileIndex =
              fieldMatch[3] !== undefined && fieldMatch[3] !== ''
                ? fieldMatch[3]
                : '-1';

            if (!(allowedFields as readonly string[]).includes(fieldName)) {
              console.warn(`Field ${fieldName} is not allowed for upload, discarding stream`);
              file.resume();
              return;
            }
            if (acceptedMimeTypes.length && !acceptedMimeTypes.includes(mimeType)) {
              console.warn(`MIME type ${mimeType} is not allowed, discarding stream`);
              file.resume();
              return;
            }

            const randName = randomUUID();
            const objectName = `domain-unified/${prismaModel}/${recordId}/${fieldName}/${randName}`;

            if (!fileByPath[recordId]) {
              fileByPath[recordId] = {};
            }
            if (!fileByPath[recordId][fieldName]) {
              fileByPath[recordId][fieldName] = {};
            }

            let size = 0;
            let limitExceeded = false;
            const countingStream = new Transform({
              transform(chunk: Buffer, _encoding, callback) {
                size += chunk.length;
                callback(null, chunk);
              },
            });

            const uploadPromise = storage
              .putObject(objectName, file.pipe(countingStream), undefined, mimeType)
              .then(async () => {
                if (limitExceeded) {
                  await storage.removeObjects([objectName]);
                  throw new BadRequestException(`File exceeds ${maxBytes} bytes: ${filename}`);
                }
                if (size === 0) {
                  await storage.removeObjects([objectName]);
                  throw new BadRequestException(`Empty file: ${filename}`);
                }

                fileByPath[recordId][fieldName][fileIndex] = {
                  recordId,
                  fieldName,
                  fileIndex,
                  fieldname,
                  filename,
                  encoding,
                  mimetype: mimeType,
                  size,
                  objectName,
                };
              });

            pendingUploads.push(uploadPromise);
            file.on('limit', () => {
              limitExceeded = true;
            });
            file.on('error', reject);
          });

          busboyInstance.on('field', () => {});

          busboyInstance.on('finish', () => {
            void Promise.all(pendingUploads)
              .then(() => resolve(fileByPath))
              .catch(async (err) => {
                await rollbackUploadedObjects(
                  storage,
                  collectObjectNamesFromFileByPath(fileByPath),
                );
                reject(err);
              });
          });

          busboyInstance.on('error', (err: unknown) => {
            const errorMessage =
              err && typeof err === 'object' && 'message' in err &&
              typeof err.message === 'string'
                ? err.message
                : 'Unknown error during form parsing';
            reject(
              new BadRequestException(`Error parsing form data: ${errorMessage}`),
            );
          });

          if (!req?.readable) {
            reject(
              new BadRequestException(
                'Request stream not available or not readable',
              ),
            );
            return;
          }

          req.pipe(busboyInstance);
        } catch (error: unknown) {
          const errorMessage =
            error && typeof error === 'object' && 'message' in error &&
            typeof error.message === 'string'
              ? error.message
              : 'Unknown error';
          reject(new BadRequestException(`Critical error: ${errorMessage}`));
        }
      });
    }
  }

  return DomainControllerLayer;
};

export const listFilesMetadataByFieldsControllerFactory = (
  extend: Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>>,
  options: IDomainControllerFactoryOpts,
): Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>> => {
  class DomainControllerLayer extends extend implements IDomainController {
    @Post(methodsCodes.listFilesMetadataByFields)
    @applyDecorators(
      ...(options.listFilesMetadataByFields?.methodDecorators || []),
      UseGuards(PassportUserThrottlerGuard),
    )
    async listFilesMetadataByFields(
      @Request() req: IApiRequest | ExpressRequest,
    ) {
      throwIfUserBlocked(req);
      const { recordIds, fieldsConfig } = (req.body || {}) as {
        recordIds: Array<string | number>;
        fieldsConfig: IDomainUnifiedFilesConfig;
      };
      if (!recordIds?.length || !fieldsConfig?.length) {
        throw new BadRequestException('Missing recordIds or fieldsConfig');
      }
      if (recordIds.some((id) => !/^[1-9]\d*$/.test(String(id)))) {
        throw new BadRequestException('Invalid recordIds');
      }

      const allowedFields = options.listFilesMetadataByFields?.fieldNames || [];
      const requestedFields = fieldsConfig
        .map(({ fieldName }) => fieldName)
        .filter((fieldName) => allowedFields.includes(fieldName));
      if (!requestedFields.length) {
        throw new BadRequestException('No allowed file fields requested');
      }
      const scope =
        await options.listFilesMetadataByFields?.checkPermAndGetScope(
          asDomainRequest(req),
          this.prismaClient,
        );
      const prismaModelClient = (
        this.prismaClient as unknown as Record<string, unknown>
      )[options.prismaModel] as {
        findMany: (args: unknown) => Promise<unknown[]>;
      };
      const select = requestedFields.reduce<Record<string, boolean>>(
        (fields, fieldName) => {
          fields[fieldName] = true;
          return fields;
        },
        { id: true },
      );
      const records = (await prismaModelClient.findMany({
        where: {
          ...scope,
          id: { in: recordIds.map((id) => BigInt(id)) },
        },
        select,
      })) as Array<{ id: bigint; [key: string]: unknown }>;
      if (!records.length) {
        throw new NotFoundException('Records not found or access denied');
      }

      return Object.fromEntries(
        records.map((record) => [
          record.id.toString(),
          selectFileMetadataFields(record, fieldsConfig, allowedFields),
        ]),
      );
    }
  }

  return DomainControllerLayer;
};

export const downloadFilesByFieldsControllerFactory = (
  extend: Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>>,
  options: IDomainControllerFactoryOpts,
): Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>> => {
  class DomainControllerLayer extends extend implements IDomainController {
    @Post(methodsCodes.downloadFilesByFields)
    @applyDecorators(
      ...(options.downloadFilesByFields?.methodDecorators || []),
      UseGuards(PassportUserThrottlerGuard)
    )
    async downloadFilesByFields(@Request() req: IApiRequest | ExpressRequest) {
      throwIfUserBlocked(req);
      try {
        const { recordIds, fieldsConfig } = (req.body || {}) as {
          recordIds: Array<string | number>;
          fieldsConfig: IDomainUnifiedFilesConfig;
        };

        if (!recordIds.length || !fieldsConfig?.length) {
          throw new BadRequestException('Missing recordIds or fieldsConfig');
        }
        const prismaModelClient = (this.prismaClient as unknown as Record<string, unknown>)[
          options.prismaModel
        ] as {
          findMany: (args: unknown) => Promise<unknown[]>;
        };
        // Проверяем доступ к записи и получаем scope
        const scope = await options.downloadFilesByFields?.checkPermAndGetScope(
          asDomainRequest(req),
          this.prismaClient,
        );

        // Проверяем, есть ли записи с такими ID в указанном scope
        const records = (await prismaModelClient.findMany({
          where: {
            ...scope,
            id: { in: recordIds.map((id) => BigInt(id)) },
          },
        })) as Array<{ id: bigint; [key: string]: unknown }>;

        if (!records || records.length === 0) {
          throw new BadRequestException(
            `No records found with ids ${recordIds.join(', ')} or access denied!`,
          );
        }
        // Список разрешенных полей
        const allowedFields = options.downloadFilesByFields?.fieldNames || [];

        if (!this.storageService) {
          console.error(
            'SeaweedfsStorageService не доступен! Проверьте регистрацию и импорт модуля SeaweedfsModule.',
          );
          throw new BadRequestException('Storage service is not available');
        }

        // Результат - объект, где ключи - ID записей, а значения - объекты с полями и файлами
        const result: Record<string, Record<string, Array<IFileData>>> = {};

        // Обрабатываем каждую запись
        for (const record of records) {
          const recordId = record.id.toString();
          const recordResult: Record<string, Array<IFileData>> = {};

          // Обрабатываем каждую конфигурацию поля
          for (const { fieldName, fileIndices } of fieldsConfig) {
            // Проверяем, что поле разрешено для скачивания
            if (!(allowedFields as readonly string[]).includes(fieldName)) {
              console.warn(
                `Field ${fieldName} is not allowed for download, skipping`,
              );
              recordResult[fieldName] = [];
              continue;
            }

            // Получаем и обрабатываем метаданные файлов из поля, если они есть
            const filesMeta = record[fieldName] as IFileMeta[] | null;
            if (!filesMeta?.length) {
              recordResult[fieldName] = [];
              continue;
            }

            // Если указаны конкретные индексы файлов
            const indicesToDownload =
              fileIndices && fileIndices.length > 0
                ? fileIndices.filter(
                    (index) => index >= 0 && index < filesMeta.length,
                  )
                : Array.from({ length: filesMeta.length }, (_, i) => i);

            // Скачиваем из хранилища потоком и кодируем в base64 по частям (без полного буфера файла).
            const filesData: IFileData[] = [];
            for (const index of indicesToDownload) {
              const fileMeta = filesMeta[index];
              if (!fileMeta) continue;

              try {
                const base64Data = await (
                  this.storageService as IStorageServiceLike
                ).getObjectAsBase64(fileMeta.objectName);

                filesData.push({
                  name: fileMeta.originalName,
                  objectName: fileMeta.objectName,
                  mimetype: fileMeta.mimetype,
                  size: fileMeta.size,
                  base64: base64Data,
                });
              } catch (error) {
                console.error(
                  `Error retrieving file ${fileMeta.objectName}:`,
                  error,
                );
              }
            }

            recordResult[fieldName] = filesData;
          }

          // Добавляем результат по записи в общий результат
          result[recordId.toString()] = recordResult;
        }

        return result;
      } catch (error) {
        console.error('Error in downloadFilesByFields:', error);
        throw error instanceof BadRequestException
          ? error
          : new BadRequestException('Failed to download files');
      }
    }
  }

  return DomainControllerLayer;
};

export const removeFilesByFieldsControllerFactory = (
  extend: Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>>,
  options: IDomainControllerFactoryOpts,
): Type<DomainControllerMixinBase<AnyApiPrismaService, unknown>> => {
  class DomainControllerLayer extends extend implements IDomainController {
    @Post(methodsCodes.removeFilesByFields)
    @applyDecorators(
      ...(options.removeFilesByFields?.methodDecorators || []),
      UseGuards(PassportUserThrottlerGuard)
    )
    async removeFilesByFields(@Request() req: IApiRequest | ExpressRequest) {
      throwIfUserBlocked(req);
      try {
        const { recordIds, fieldsConfig } = (req.body || {}) as {
          recordIds: Array<string | number>;
          fieldsConfig: IDomainUnifiedFilesConfig;
        };

        if (!recordIds.length || !fieldsConfig?.length) {
          throw new BadRequestException('Missing recordIds or fieldsConfig');
        }

        // Проверяем права доступа к записи и получаем scope
        const scope = await options.removeFilesByFields?.checkPermAndGetScope(
          asDomainRequest(req),
          this.prismaClient,
        );

        const prismaModelClient = (this.prismaClient as unknown as Record<string, unknown>)[
          options.prismaModel
        ] as {
          findMany: (args: unknown) => Promise<unknown[]>;
          update: (args: unknown) => Promise<unknown>;
        };
        const allowedFields = options.removeFilesByFields?.fieldNames || [];

        // Создаем селектор для выборки только нужных полей
        const selectFields = fieldsConfig.reduce(
          (acc, { fieldName }) => {
            if ((allowedFields as readonly string[]).includes(fieldName)) {
              acc[fieldName] = true;
            }
            return acc;
          },
          { id: true } as Record<string, boolean>,
        );

        // Проверяем, есть ли записи с такими ID в указанном scope
        const records = (await prismaModelClient.findMany({
          where: {
            ...scope,
            id: { in: recordIds.map((id) => BigInt(id)) },
          },
          select: selectFields,
        })) as Array<{ id: bigint; [key: string]: unknown }>;

        if (!records || !records?.length) {
          throw new NotFoundException(
            `No records found with ids ${recordIds.join(', ')} or access denied`,
          );
        }

        if (!this.storageService) {
          console.error(
            'SeaweedfsStorageService не доступен! Проверьте регистрацию и импорт модуля SeaweedfsModule.',
          );
          throw new BadRequestException('Storage service is not available');
        }

        const objectNamesToRemove: string[] = [];
        let totalFilesDeleted = 0;
        const results: {
          id?: string;
          success?: boolean;
          deletedFiles?: number;
          updatedRecord?: any;
          message?: string;
          error?: string;
        }[] = [];
        // Обрабатываем каждую запись
        for (const record of records) {
          const recordId = record.id.toString();
          const updateData: Record<string, any> = {};
          let recordFilesDeleted = 0;

          // Обрабатываем каждое поле с файлами
          for (const { fieldName, fileIndices } of fieldsConfig) {
            // Проверяем, что поле разрешено и содержит данные
            if (!(allowedFields as readonly string[]).includes(fieldName) || !record[fieldName]) {
              continue;
            }
            const filesMeta = record[fieldName] as IFileMeta[] | null | undefined;

            // Если нет метаданных файлов, пропускаем поле
            if (!filesMeta?.length) {
              continue;
            }
            // Если не указаны индексы, удаляем все файлы
            if (!fileIndices?.length) {
              // Удаляем файлы из SeaweedFS
              for (const fileMeta of filesMeta) {
                try {
                  objectNamesToRemove.push(fileMeta.objectName);
                  recordFilesDeleted++;
                  totalFilesDeleted++;
                } catch (error) {
                  console.error(
                    `Error removing file ${fileMeta.objectName}:`,
                    error,
                  );
                }
              }
              // Очищаем поле в записи
              updateData[fieldName] = [];
            } else {
              // Удаляем только указанные файлы по индексам
              const newFilesMeta = [...filesMeta];

              // Сортируем индексы в порядке убывания, чтобы удаление не влияло на последующие индексы
              const sortedIndices = [...fileIndices].sort((a, b) => b - a);
              for (const index of sortedIndices) {
                if (index >= 0 && index < newFilesMeta.length) {
                  try {
                    objectNamesToRemove.push(newFilesMeta[index].objectName);
                    newFilesMeta.splice(index, 1);
                    recordFilesDeleted++;
                    totalFilesDeleted++;
                  } catch (error) {
                    console.error(`Error removing file at index ${index}:`, error);
                  }
                }
              }
              // Обновляем поле с оставшимися файлами или [], если все удалены
              updateData[fieldName] = newFilesMeta.length > 0 ? newFilesMeta : [];
            }
          }

          // Обновляем запись, если есть изменения
          if (Object.keys(updateData).length > 0) {
            try {
              const updated = await prismaModelClient.update({
                where: { id: BigInt(recordId) },
                data: updateData,
              });

              results.push({
                id: recordId,
                success: true,
                deletedFiles: recordFilesDeleted,
                updatedRecord: updated,
              });
            } catch (error) {
              console.error(`Error updating record ${recordId}:`, error);
              results.push({
                id: recordId,
                success: false,
                error: `Failed to update record ${recordId}`,
              });
            }
          } else {
            results.push({
              id: recordId,
              success: true,
              deletedFiles: recordFilesDeleted,
              message: 'No fields were updated',
            });
          }
        }

        // Удаляем файлы для всех записей
        if (objectNamesToRemove.length > 0) {
          try {
            await (this.storageService as IStorageServiceLike).removeObjects(objectNamesToRemove);
          } catch (error) {
            console.error('Error removing files:', error);
          }
        }

        return {
          success: true,
          totalDeletedFiles: totalFilesDeleted,
          results,
        };
      } catch (error: unknown) {
        console.error('Error in removeFilesByFields:', error);
        if (error instanceof HttpException) {
          throw error;
        }
        throw new InternalServerErrorException(
          `Failed to remove files: ${error instanceof Error ? error.message : 'Unknown error'}`,
        );
      } finally {
        flushCacheAfterMutationIfConfigured(this.prismaClient, options);
      }
    }
  }

  return DomainControllerLayer;
};
