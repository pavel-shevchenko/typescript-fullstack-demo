import type {
  IDomainUnifiedFilesConfig,
  IFileMeta,
} from '../types/domain-unified.types';

export function selectFileMetadataFields(
  record: Record<string, unknown>,
  fieldsConfig: IDomainUnifiedFilesConfig,
  allowedFields: readonly string[],
): Record<string, IFileMeta[]> {
  const result: Record<string, IFileMeta[]> = {};
  for (const { fieldName, fileIndices } of fieldsConfig) {
    if (!allowedFields.includes(fieldName)) continue;
    const metadata = Array.isArray(record[fieldName]) ? record[fieldName] : [];
    const selected = fileIndices?.length
      ? fileIndices
          .filter((index) => Number.isInteger(index) && index >= 0 && index < metadata.length)
          .map((index) => metadata[index]!)
      : metadata;
    result[fieldName] = selected.filter(isFileMeta);
  }
  return result;
}

function isFileMeta(value: unknown): value is IFileMeta {
  if (!value || typeof value !== 'object') return false;
  const metadata = value as Partial<IFileMeta>;
  return (
    typeof metadata.fieldName === 'string' &&
    typeof metadata.originalName === 'string' &&
    typeof metadata.objectName === 'string' &&
    typeof metadata.mimetype === 'string' &&
    typeof metadata.size === 'number' &&
    Number.isFinite(metadata.size) &&
    metadata.size >= 0
  );
}
