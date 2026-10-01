/**
 * Унифицирует паттерн расширения Prisma-клиента:
 * `model.$allModels.findManyAndCount({ ...findManyArgs }) -> { items, totalCount }`
 */
export type IPrismaFindManyAndCountReturn<
  TItem extends Record<string, unknown> = Record<string, unknown>,
> = {
  items: TItem[];
  totalCount: number;
};

/**
 * Возвращает полностью готовое prisma-extension для findManyAndCount.
 *
 * NB: сигнатура метода в типах будет менее строгой (args/this через `any`), зато
 * подсказки IDE для стандартных Prisma операций не страдают, а сервисы становятся одинаковыми.
 */
export function makeFindManyAndCountExtension(prisma: {
  $transaction: (ops: unknown[]) => Promise<unknown>;
}) {
  return {
    name: 'findManyAndCount',
    model: {
      $allModels: {
        // NOTE: `unknown` здесь намеренно — иначе TS ломается на контравариантности параметров.
        // Это "проводка" объекта $extends; результат типизирован общий.
        async findManyAndCount(
          this: unknown,
          args: unknown,
        ): Promise<IPrismaFindManyAndCountReturn> {
          const model = this as {
            findMany: (a: unknown) => Promise<unknown>;
            count: (a: unknown) => Promise<unknown>;
          };
          const findManyPromise = model.findMany(args);
          const where = (args as { where?: unknown } | null)?.where;
          const countPromise = model.count({ where });

          const [data, count] = (await Promise.all([
            findManyPromise,
            countPromise,
          ])) as [unknown, unknown];

          return {
            items: (Array.isArray(data) ? data : []) as Record<string, unknown>[],
            totalCount: typeof count === 'number' ? count : Number(count ?? 0),
          };
        },
      },
    },
  } as const;
}
