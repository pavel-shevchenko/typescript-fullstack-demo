'use client';

import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { produce } from 'immer';
import {
  fetchAdminCmsSnapshotAction,
  fetchAdminCrmSnapshotAction,
} from 'react_common';
import { AiRecommendationsPanel } from './ai-recommendations-panel';
import { CrmContactWizardPreview } from './crm-contact-wizard';
import {
  EntityCrudTable,
  type EntityCrudConfig,
} from './entity-crud-table';
import { PrivacyPanel } from './privacy-panel';
import { SearchAdminPanel } from './search-admin-panel';

type Tab = 'cms' | 'crm' | 'ai' | 'search' | 'privacy';

type State = {
  tab: Tab;
  cms: Record<string, unknown[]> | null;
  crm: Record<string, unknown[]> | null;
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: 'tab'; tab: Tab }
  | { type: 'start' }
  | { type: 'snapshots'; cms: Record<string, unknown[]>; crm: Record<string, unknown[]> }
  | { type: 'error'; message: string };

function reducer(state: State, action: Action): State {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'tab':
        draft.tab = action.tab;
        break;
      case 'start':
        draft.loading = true;
        draft.error = null;
        break;
      case 'snapshots':
        draft.cms = action.cms;
        draft.crm = action.crm;
        draft.loading = false;
        draft.error = null;
        break;
      case 'error':
        draft.error = action.message;
        draft.loading = false;
        break;
    }
  });
}

function tenantOptions(crm: Record<string, unknown[]> | null) {
  return (crm?.crmTenant ?? []).map((row) => {
    const item = row as Record<string, unknown>;
    return {
      value: String(item.id ?? ''),
      label: `${item.displayName ?? item.slug ?? item.id}`,
    };
  });
}

function contactOptions(crm: Record<string, unknown[]> | null) {
  return (crm?.crmContact ?? []).map((row) => {
    const item = row as Record<string, unknown>;
    return {
      value: String(item.id ?? ''),
      label: String(item.fullName ?? item.id),
    };
  });
}

function serviceOptions(crm: Record<string, unknown[]> | null) {
  return (crm?.crmService ?? []).map((row) => {
    const item = row as Record<string, unknown>;
    return {
      value: String(item.id ?? ''),
      label: String(item.name ?? item.id),
    };
  });
}

export function AdminDashboard(props: { authorUserId: string; role: 'admin' | 'customer' }) {
  const [state, dispatch] = useReducer(reducer, {
    tab: 'cms',
    cms: null,
    crm: null,
    loading: false,
    error: null,
  });

  const reloadSnapshots = useCallback(async () => {
    dispatch({ type: 'start' });
    try {
      const [cms, crm] = await Promise.all([
        fetchAdminCmsSnapshotAction(),
        fetchAdminCrmSnapshotAction(),
      ]);
      dispatch({ type: 'snapshots', cms, crm });
    } catch (err) {
      dispatch({ type: 'error', message: err instanceof Error ? err.message : 'Load failed' });
    }
  }, []);

  useEffect(() => {
    void reloadSnapshots();
  }, [reloadSnapshots]);

  const onAiApplied = useCallback(
    async (targetService?: 'cms' | 'crm') => {
      await reloadSnapshots();
      if (targetService === 'cms' || targetService === 'crm') {
        dispatch({ type: 'tab', tab: targetService });
      }
    },
    [reloadSnapshots],
  );

  const tenants = useMemo(() => tenantOptions(state.crm), [state.crm]);
  const contacts = useMemo(() => contactOptions(state.crm), [state.crm]);
  const services = useMemo(() => serviceOptions(state.crm), [state.crm]);
  const defaultTenantId = tenants[0]?.value ?? '';

  const cmsConfigs: EntityCrudConfig[] = useMemo(
    () => [
      {
        model: 'cmsPage',
        title: 'Pages',
        defaults: {
          slug: '',
          title: '',
          summary: '',
          bodyMarkdown: '',
          published: true,
          sortOrder: 0,
        },
        fields: [
          { key: 'slug', label: 'Slug', kind: 'text', required: true },
          { key: 'title', label: 'Title', kind: 'text', required: true },
          { key: 'summary', label: 'Summary', kind: 'textarea' },
          { key: 'bodyMarkdown', label: 'Body (markdown)', kind: 'textarea' },
          { key: 'published', label: 'Published', kind: 'boolean' },
          { key: 'sortOrder', label: 'Sort order', kind: 'number' },
        ],
      },
      {
        model: 'cmsArticle',
        title: 'Articles',
        defaults: {
          slug: '',
          title: '',
          excerpt: '',
          bodyMarkdown: '',
          published: true,
        },
        fields: [
          { key: 'slug', label: 'Slug', kind: 'text', required: true },
          { key: 'title', label: 'Title', kind: 'text', required: true },
          { key: 'excerpt', label: 'Excerpt', kind: 'textarea' },
          { key: 'bodyMarkdown', label: 'Body (markdown)', kind: 'textarea' },
          { key: 'published', label: 'Published', kind: 'boolean' },
        ],
      },
      {
        model: 'cmsPromoBlock',
        title: 'Promo',
        defaults: {
          code: '',
          headline: '',
          subline: '',
          ctaLabel: 'Подробнее',
          ctaHref: '/',
          active: true,
        },
        fields: [
          { key: 'code', label: 'Code', kind: 'text', required: true },
          { key: 'headline', label: 'Headline', kind: 'text', required: true },
          { key: 'subline', label: 'Subline', kind: 'textarea' },
          { key: 'ctaLabel', label: 'CTA label', kind: 'text' },
          { key: 'ctaHref', label: 'CTA href', kind: 'text' },
          { key: 'active', label: 'Active', kind: 'boolean' },
        ],
      },
    ],
    [],
  );

  const crmConfigs: EntityCrudConfig[] = useMemo(
    () => [
      {
        model: 'crmTenant',
        title: 'Tenants',
        defaults: {
          slug: '',
          displayName: '',
          timezone: 'Europe/Moscow',
        },
        fields: [
          { key: 'slug', label: 'Slug', kind: 'text', required: true },
          { key: 'displayName', label: 'Display name', kind: 'text', required: true },
          { key: 'timezone', label: 'Timezone', kind: 'text' },
        ],
      },
      {
        model: 'crmContact',
        title: 'Contacts',
        defaults: {
          tenantId: defaultTenantId,
          fullName: '',
          phone: '',
          email: '',
          notes: '',
        },
        fields: [
          {
            key: 'tenantId',
            label: 'Tenant',
            kind: 'select',
            required: true,
            options: tenants,
          },
          { key: 'fullName', label: 'Full name', kind: 'text', required: true },
          { key: 'phone', label: 'Phone', kind: 'text' },
          { key: 'email', label: 'Email', kind: 'text' },
          { key: 'notes', label: 'Notes', kind: 'textarea' },
        ],
      },
      {
        model: 'crmService',
        title: 'Services',
        defaults: {
          tenantId: defaultTenantId,
          name: '',
          durationMin: 60,
          priceRub: 0,
          active: true,
        },
        fields: [
          {
            key: 'tenantId',
            label: 'Tenant',
            kind: 'select',
            required: true,
            options: tenants,
          },
          { key: 'name', label: 'Name', kind: 'text', required: true },
          { key: 'durationMin', label: 'Duration (min)', kind: 'number' },
          { key: 'priceRub', label: 'Price (RUB)', kind: 'number' },
          { key: 'active', label: 'Active', kind: 'boolean' },
        ],
      },
      {
        model: 'crmAppointment',
        title: 'Appointments',
        defaults: {
          tenantId: defaultTenantId,
          contactId: contacts[0]?.value ?? '',
          serviceId: services[0]?.value ?? '',
          startsAt: '',
          notes: '',
        },
        fields: [
          {
            key: 'tenantId',
            label: 'Tenant',
            kind: 'select',
            required: true,
            options: tenants,
          },
          {
            key: 'contactId',
            label: 'Contact',
            kind: 'select',
            required: true,
            options: contacts,
          },
          {
            key: 'serviceId',
            label: 'Service',
            kind: 'select',
            required: true,
            options: services,
          },
          { key: 'startsAt', label: 'Starts at', kind: 'datetime', required: true },
          { key: 'notes', label: 'Notes', kind: 'textarea' },
        ],
      },
    ],
    [contacts, defaultTenantId, services, tenants],
  );

  return (
    <div className="space-y-6">
      <nav className="flex flex-wrap gap-2">
        {(['cms', 'crm', 'ai', 'search', 'privacy'] as Tab[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => dispatch({ type: 'tab', tab: t })}
            className={`rounded border border-border px-3 py-1 ${
              state.tab === t
                ? 'bg-foreground text-background'
                : 'bg-card text-foreground hover:bg-muted'
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </nav>
      {state.loading ? <p className="text-muted-foreground">Загрузка…</p> : null}
      {state.error ? <p className="text-destructive">{state.error}</p> : null}
      {state.tab === 'cms' && state.cms ? (
        <div className="space-y-6">
          {cmsConfigs.map((config) => (
            <EntityCrudTable
              key={config.model}
              config={config}
              rows={state.cms?.[config.model] ?? []}
              onSaved={reloadSnapshots}
            />
          ))}
          <div>
            <h3 className="mb-2 font-medium text-foreground">AI prompt slots</h3>
            <p className="text-sm text-muted-foreground">
              Слоты промптов только для чтения в этом MVP (правьте через AI/seed).
            </p>
            <ReadOnlyTable rows={state.cms.cmsAiPromptSlot ?? []} />
          </div>
        </div>
      ) : null}
      {state.tab === 'crm' && state.crm ? (
        <div className="space-y-6">
          <CrmContactWizardPreview />
          {crmConfigs.map((config) => (
            <EntityCrudTable
              key={config.model}
              config={config}
              rows={state.crm?.[config.model] ?? []}
              onSaved={reloadSnapshots}
            />
          ))}
        </div>
      ) : null}
      {state.tab === 'ai' ? (
        <AiRecommendationsPanel
          authorUserId={props.authorUserId}
          role={props.role}
          onApplied={onAiApplied}
        />
      ) : null}
      {state.tab === 'search' ? (
        <SearchAdminPanel isAdmin={props.role === 'admin'} />
      ) : null}
      {state.tab === 'privacy' ? <PrivacyPanel /> : null}
    </div>
  );
}

function ReadOnlyTable({ rows }: { rows: unknown[] }) {
  if (!rows?.length) {
    return <p className="text-sm text-muted-foreground">пусто</p>;
  }
  const first = rows[0] as Record<string, unknown>;
  const keys = Object.keys(first).slice(0, 6);
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-border text-sm">
        <thead>
          <tr className="bg-muted">
            {keys.map((key) => (
              <th key={key} className="border border-border px-2 py-1 text-left">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {keys.map((key) => (
                <td key={key} className="border border-border px-2 py-1">
                  {String((row as Record<string, unknown>)[key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
