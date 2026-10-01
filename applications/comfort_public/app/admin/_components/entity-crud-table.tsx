'use client';

import { useMemo, useState } from 'react';
import {
  adminCreateEntityAction,
  adminUpdateEntityAction,
  type AdminEditableModel,
} from 'react_common';
import { AdminDialog, PencilIcon, PlusIcon } from './admin-dialog';
import { ArticleHeroFilesAdmin } from './article-hero-files-admin';

type FieldKind = 'text' | 'textarea' | 'number' | 'boolean' | 'datetime' | 'select';

export type EntityField = {
  key: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
};

export type EntityCrudConfig = {
  model: AdminEditableModel;
  title: string;
  fields: EntityField[];
  defaults: Record<string, unknown>;
};

function asRecord(row: unknown): Record<string, unknown> {
  return row && typeof row === 'object' ? (row as Record<string, unknown>) : {};
}

function displayValue(value: unknown) {
  if (value == null) return '';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function toFormState(row: Record<string, unknown>, fields: EntityField[]) {
  const next: Record<string, string | boolean> = {};
  for (const field of fields) {
    const raw = row[field.key];
    if (field.kind === 'boolean') {
      next[field.key] = Boolean(raw);
    } else if (field.kind === 'datetime' && typeof raw === 'string') {
      next[field.key] = raw.slice(0, 16);
    } else {
      next[field.key] = raw == null ? '' : String(raw);
    }
  }
  return next;
}

function toPayload(
  fields: EntityField[],
  form: Record<string, string | boolean>,
  id?: string,
) {
  const data: Record<string, unknown> = id ? { id } : {};
  for (const field of fields) {
    data[field.key] = form[field.key];
  }
  return data;
}

export function EntityCrudTable(props: {
  config: EntityCrudConfig;
  rows: unknown[];
  onSaved: () => Promise<void> | void;
}) {
  const { config, rows } = props;
  const [dialog, setDialog] = useState<'create' | 'edit' | null>(null);
  const [editingId, setEditingId] = useState<string>('');
  const [form, setForm] = useState<Record<string, string | boolean>>({});
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const columns = useMemo(() => {
    if (!rows.length) return config.fields.slice(0, 5).map((field) => field.key);
    return Object.keys(asRecord(rows[0])).filter(
      (key) => key !== 'heroFiles',
    ).slice(0, 6);
  }, [rows, config.fields]);

  function openCreate() {
    setError('');
    setEditingId('');
    setForm(toFormState(config.defaults, config.fields));
    setDialog('create');
  }

  function openEdit(row: unknown) {
    const record = asRecord(row);
    setError('');
    setEditingId(String(record.id ?? ''));
    setForm(toFormState({ ...config.defaults, ...record }, config.fields));
    setDialog('edit');
  }

  function close() {
    setDialog(null);
    setError('');
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError('');
    try {
      if (dialog === 'create') {
        const created = await adminCreateEntityAction(
          config.model,
          toPayload(config.fields, form),
        );
        const newId = created.id != null ? String(created.id) : '';
        await props.onSaved();
        if (config.model === 'cmsArticle' && newId) {
          setEditingId(newId);
          setDialog('edit');
        } else {
          close();
        }
      } else {
        await adminUpdateEntityAction(
          config.model,
          toPayload(config.fields, form, editingId),
        );
        await props.onSaved();
        close();
      }
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-medium text-foreground">{config.title}</h3>
        <button
          type="button"
          onClick={openCreate}
          className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-sm hover:bg-muted"
          aria-label={`Добавить ${config.title}`}
          title="Добавить"
        >
          <PlusIcon />
          Добавить
        </button>
      </div>
      {!rows?.length ? (
        <p className="text-sm text-muted-foreground">{config.title}: пусто</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-border text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="w-10 border border-border px-2 py-1" />
                {columns.map((key) => (
                  <th
                    key={key}
                    className="border border-border px-2 py-1 text-left text-foreground"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const record = asRecord(row);
                return (
                  <tr key={String(record.id ?? index)}>
                    <td className="border border-border px-2 py-1">
                      <button
                        type="button"
                        onClick={() => openEdit(row)}
                        className="rounded p-1 hover:bg-muted"
                        aria-label={`Править ${config.title}`}
                        title="Править"
                      >
                        <PencilIcon />
                      </button>
                    </td>
                    {columns.map((key) => (
                      <td
                        key={key}
                        className="max-w-[14rem] truncate border border-border px-2 py-1 text-foreground"
                      >
                        {displayValue(record[key])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <AdminDialog
        open={dialog !== null}
        title={dialog === 'create' ? `Новая запись: ${config.title}` : `Правка: ${config.title}`}
        onClose={close}
      >
        <form onSubmit={submit} className="space-y-3">
          {config.fields.map((field) => (
            <label key={field.key} className="block space-y-1 text-sm">
              <span>{field.label}</span>
              {field.kind === 'textarea' ? (
                <textarea
                  required={field.required}
                  rows={5}
                  className="w-full rounded border border-border bg-background px-3 py-2"
                  value={String(form[field.key] ?? '')}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, [field.key]: event.target.value }))
                  }
                />
              ) : field.kind === 'boolean' ? (
                <input
                  type="checkbox"
                  className="ml-2"
                  checked={Boolean(form[field.key])}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, [field.key]: event.target.checked }))
                  }
                />
              ) : field.kind === 'select' ? (
                <select
                  required={field.required}
                  className="w-full rounded border border-border bg-background px-3 py-2"
                  value={String(form[field.key] ?? '')}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, [field.key]: event.target.value }))
                  }
                >
                  <option value="">—</option>
                  {(field.options ?? []).map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  required={field.required}
                  type={
                    field.kind === 'number'
                      ? 'number'
                      : field.kind === 'datetime'
                        ? 'datetime-local'
                        : 'text'
                  }
                  className="w-full rounded border border-border bg-background px-3 py-2"
                  value={String(form[field.key] ?? '')}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, [field.key]: event.target.value }))
                  }
                />
              )}
            </label>
          ))}
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={close}
              className="rounded border border-border px-3 py-1.5 text-sm"
            >
              Отмена
            </button>
            <button
              disabled={saving}
              className="rounded bg-foreground px-3 py-1.5 text-sm text-background disabled:opacity-50"
            >
              {saving ? 'Сохранение…' : 'Сохранить'}
            </button>
          </div>
        </form>
        {config.model === 'cmsArticle' ? (
          <div className="mt-5 border-t border-border pt-4">
            <ArticleHeroFilesAdmin articleId={editingId} />
          </div>
        ) : null}
      </AdminDialog>
    </div>
  );
}
