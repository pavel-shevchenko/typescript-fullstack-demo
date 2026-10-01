type PlainObject = Record<string, unknown>;

export type IncludePermissionsTree<TInclude> =
  | true
  | { [Relation in keyof TInclude]?: true | IncludePermissionsTree<PlainObject> };

export const DEFAULT_INCLUDE_PERMISSIONS = {
  admin: true,
  customer: {},
} as const;

const isPlainObject = (value: unknown): value is PlainObject =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const pruneTree = (
  source: PlainObject,
  permissions: IncludePermissionsTree<PlainObject>,
  keepScalars: boolean,
): PlainObject | undefined => {
  if (permissions === true) return source;
  const out: PlainObject = {};
  for (const [key, value] of Object.entries(source)) {
    const relation = key === '_count' || /^[A-Z]/.test(key);
    if (!relation && keepScalars) {
      out[key] = value;
      continue;
    }
    const allowed = permissions[key];
    if (!allowed) continue;
    if (!isPlainObject(value) || allowed === true) {
      out[key] = value;
      continue;
    }
    const next = { ...value };
    if (isPlainObject(next.include)) {
      next.include = pruneTree(next.include, allowed, false);
    }
    if (isPlainObject(next.select)) {
      next.select = pruneTree(next.select, allowed, true);
    }
    out[key] = next;
  }
  return Object.keys(out).length ? out : undefined;
};

type RestrictOptions<T extends PlainObject> = {
  role?: 'admin' | 'customer' | null;
  permissionsByRole: {
    admin?: IncludePermissionsTree<T>;
    customer?: Exclude<IncludePermissionsTree<T>, true>;
  };
};

export function restrictIncludeByRole<T extends PlainObject>({
  include,
  role,
  permissionsByRole,
}: RestrictOptions<T> & { include: T }): T | undefined {
  const allowed = permissionsByRole[role ?? 'customer'];
  if (!allowed) return undefined;
  return pruneTree(include, allowed, false) as T | undefined;
}

export function restrictSelectByRole<T extends PlainObject>({
  select,
  role,
  permissionsByRole,
}: RestrictOptions<T> & { select: T }): T | undefined {
  const allowed = permissionsByRole[role ?? 'customer'];
  if (!allowed) return undefined;
  return pruneTree(select, allowed, true) as T | undefined;
}

export const walkIncludePermissionsTree = (
  tree: IncludePermissionsTree<PlainObject> | undefined,
  visit: (
    relationKey: string,
    nested: IncludePermissionsTree<PlainObject>,
  ) => void,
): void => {
  if (!tree || tree === true || !isPlainObject(tree)) return;
  for (const [key, nested] of Object.entries(tree)) {
    if (nested) visit(key, nested as IncludePermissionsTree<PlainObject>);
  }
};
