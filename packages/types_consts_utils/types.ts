export type AnyClass = new (...args: unknown[]) => object;

export type StringOrRetValsObject = {
  [key: string]: string | StringOrRetValsObject;
};
