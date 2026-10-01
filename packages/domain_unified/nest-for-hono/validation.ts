import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequestException } from './http-errors';
import type { Type } from './decorators';

export async function validateBody<T>(
  body: unknown,
  dtoClass?: Type<T>,
): Promise<T> {
  // Inline/interface param types erase to Object under emitDecoratorMetadata —
  // plainToInstance(Object, …) can strip fields (e.g. recommendations → 400).
  if (
    !dtoClass ||
    dtoClass === Object ||
    dtoClass === Array ||
    dtoClass === String ||
    dtoClass === Number ||
    dtoClass === Boolean
  ) {
    return body as T;
  }
  const instance = plainToInstance(dtoClass, body, {
    enableImplicitConversion: true,
  });
  const errors = await validate(instance as object, {
    whitelist: true,
    forbidNonWhitelisted: false,
  });
  if (errors.length) {
    throw new BadRequestException({ errors });
  }
  return instance as T;
}

export async function validateOptionalBody<T>(
  body: unknown,
  dtoClass?: Type<T>,
): Promise<T> {
  return validateBody(body, dtoClass);
}
