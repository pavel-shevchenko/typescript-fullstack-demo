/** Значение поля `id` сущности БД (сейчас Int, позже возможен BigInt). */
export type DatabaseRecordId = number | bigint;

/**
 * Проверка, что значение — допустимый идентификатор записи
 */
export function isDatabaseRecordId(value: unknown): value is DatabaseRecordId {
  if (typeof value === 'bigint') return true;
  if (typeof value === 'number') return Number.isFinite(value);
  return false;
}
