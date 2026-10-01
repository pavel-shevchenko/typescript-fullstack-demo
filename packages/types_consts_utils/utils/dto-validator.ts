import { plainToInstance } from 'class-transformer';
import { validateSync, type ValidationError } from 'class-validator';
import { type AnyClass, type StringOrRetValsObject } from '../types';

export type DtoValidatorOptions = {
  /** Убирать свойства без декораторов (аналог whitelist в class-validator). По умолчанию true. */
  whitelist?: boolean;
  /**
   * Бросать ошибку, если пришли лишние поля (вместо молчаливого удаления).
   * По умолчанию false (чтобы сохранить текущую совместимость).
   */
  forbidNonWhitelisted?: boolean;
};

/**
 * Возвращает каррированный валидатор для одного DTO: (data) => Result, где Result равен {} при успехе или объекту ошибок при провале.
 */
export function createDtoValidator(
  dtoClass: AnyClass,
  options: DtoValidatorOptions = {},
): (data: Record<string, unknown>) => StringOrRetValsObject {
  const { whitelist = true, forbidNonWhitelisted = false } = options;

  return (data: Record<string, unknown>) => {
    const instance = plainToInstance(dtoClass, data, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(instance, { whitelist, forbidNonWhitelisted });
    if (errors.length === 0) return {};
    return convertValidationErrors(errors);
  };
}

function convertValidationErrors(errors: ValidationError[]): StringOrRetValsObject {
  const result: StringOrRetValsObject = {};
  for (const error of errors) {
    const fieldName = error.property;
    const children = (error.children ?? []) as ValidationError[];
    if (children.length > 0) {
      result[fieldName] = convertValidationErrors(children);
    } else if (error.constraints) {
      result[fieldName] = Object.values(error.constraints)[0];
    }
  }
  return result;
}

/** Ошибка валидации DTO; поле errors — объект для ответа (например BadRequestException). */
export class DtoValidationError extends Error {
  constructor(public readonly errors: StringOrRetValsObject) {
    super('DTO validation failed');
    this.name = 'DtoValidationError';
  }
}

/**
 * Валидирует массив DTO; при первой же ошибке бросает DtoValidationError(errors).
 * Опция whitelist: true передаётся в валидатор по умолчанию.
 */
export function validateDtos(
  dtoClass: AnyClass,
  dtos: Record<string, unknown>[],
  options: DtoValidatorOptions = {},
): void {
  const { whitelist = true, forbidNonWhitelisted = false } = options;

  for (const dto of dtos) {
    const instance = plainToInstance(dtoClass, dto, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(instance, { whitelist, forbidNonWhitelisted });
    if (errors.length > 0) {
      throw new DtoValidationError(convertValidationErrors(errors));
    }

    // ВАЖНО: class-validator с whitelist удаляет лишние поля только из instance,
    // но не модифицирует исходный plain object. Так как далее (domain_unified) мы
    // отправляем в Prisma исходные объекты, санитизируем dto in-place.
    if (whitelist) {
      const allowed = instance as unknown as Record<string, unknown>;
      for (const k of Object.keys(dto)) {
        if (!(k in allowed)) delete dto[k];
      }
      Object.assign(dto, allowed);
    }
  }
}
