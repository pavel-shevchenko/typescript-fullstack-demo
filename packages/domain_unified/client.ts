import { DomainUnifiedFileField, IFileMeta } from './types/domain-unified.types';

export * from './types/domain-unified.types';
export * from './types/domain-unified-request';
export * from './types/controller-builder.interface';
export * from './domain-unified-client';

export function isFileMetaItem(item: unknown): item is IFileMeta {
  return (
    !!item &&
    typeof item === 'object' &&
    typeof (item as IFileMeta).objectName === 'string' &&
    typeof (item as IFileMeta).originalName === 'string' &&
    typeof (item as IFileMeta).mimetype === 'string'
  );
}

/** Есть ли в Json-поле непустой массив метаданных файлов. */
export function hasDomainUnifiedFileField(
  meta: unknown,
): meta is DomainUnifiedFileField {
  return Array.isArray(meta) && meta.length > 0 && meta.every(isFileMetaItem);
}

/** Нормализует Json-поле Prisma к типу файлового поля domain_unified. */
export function asDomainUnifiedFileField(meta: unknown): DomainUnifiedFileField {
  return hasDomainUnifiedFileField(meta) ? meta : null;
}
