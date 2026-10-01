import {
  type ApiCmsModels,
  type ApiCrmModels,
  type ApiSearchModels,
} from 'types_consts_utils';
import { type IDomainController } from './controller-builder.interface';

export type AllMicroservicesModels =
  | ApiCmsModels
  | ApiCrmModels
  | ApiSearchModels;

export const methodsCodes: Record<keyof IDomainController, string> = {
  prismaGetMany: 'prisma-get-many',
  prismaCreateMany: 'prisma-create-many',
  prismaUpdateMany: 'prisma-update-many',
  prismaDeleteMany: 'prisma-delete-many',
  uploadFilesToFields: 'upload-files-to-fields',
  listFilesMetadataByFields: 'list-files-metadata-by-fields',
  downloadFilesByFields: 'download-files-by-fields',
  removeFilesByFields: 'remove-files-by-fields',
} as const;

export interface PrismaOffsetPagination {
  skip?: number;
  take?: number;
}

export interface IFileMeta {
  fieldName: string;
  originalName: string;
  objectName: string;
  mimetype: string;
  size: number;
}

export interface IFileData {
  name: string;
  objectName: string;
  mimetype: string;
  size: number;
  base64: string;
}

export type IDomainUnifiedFilesConfig = Array<{
  fieldName: string;
  fileIndices?: number[];
}>;

export type DomainUnifiedFileField = IFileMeta[] | null;

export type WithDomainUnifiedFileFields<
  TModel,
  TFileFields extends keyof TModel,
> = Omit<TModel, TFileFields> & {
  [K in TFileFields]: DomainUnifiedFileField;
};
