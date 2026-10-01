'use client';

import { useReducer } from 'react';
import { produce } from 'immer';
import {
  confirmRecommendationAction,
  fetchPendingRecommendationsAction,
  rejectRecommendationAction,
  requestAiRecommendationsAction,
  saveRecommendationDraftsAction,
  type ComfortRecommendationDraft,
} from 'react_common';

type PanelState = {
  prompt: string;
  loading: boolean;
  error: string | null;
  drafts: ComfortRecommendationDraft[];
  pending: Array<Record<string, unknown>>;
  missingField: string;
};

type Action =
  | { type: 'set_prompt'; prompt: string }
  | { type: 'set_missing'; value: string }
  | { type: 'start' }
  | { type: 'drafts'; drafts: ComfortRecommendationDraft[] }
  | { type: 'pending'; items: Array<Record<string, unknown>> }
  | { type: 'error'; message: string }
  | { type: 'idle' };

function reducer(state: PanelState, action: Action): PanelState {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'set_prompt':
        draft.prompt = action.prompt;
        break;
      case 'set_missing':
        draft.missingField = action.value;
        break;
      case 'start':
        draft.loading = true;
        draft.error = null;
        break;
      case 'drafts':
        draft.loading = false;
        draft.drafts = action.drafts;
        break;
      case 'pending':
        draft.pending = action.items;
        draft.loading = false;
        break;
      case 'error':
        draft.loading = false;
        draft.error = action.message;
        break;
      case 'idle':
        draft.loading = false;
        break;
    }
  });
}

export function AiRecommendationsPanel(props: {
  authorUserId: string;
  role: 'admin' | 'customer';
  /** Full admin CMS/CRM refetch after apply (demo: no partial entity patching). */
  onApplied?: (targetService?: 'cms' | 'crm') => void | Promise<void>;
}) {
  const [state, dispatch] = useReducer(reducer, {
    prompt: '',
    loading: false,
    error: null,
    drafts: [],
    pending: [],
    missingField: '',
  });

  async function loadPending() {
    const res = await fetchPendingRecommendationsAction();
    dispatch({ type: 'pending', items: res.items });
  }

  async function onRequest(e: React.FormEvent) {
    e.preventDefault();
    dispatch({ type: 'start' });
    try {
      const missing = state.missingField ? [state.missingField] : [];
      const { recommendations } = await requestAiRecommendationsAction({
        prompt: state.prompt,
        missingFields: missing,
      });
      dispatch({ type: 'drafts', drafts: recommendations });
      const toSave = recommendations.filter((r) => !r.askUserFor);
      if (toSave.length) {
        await saveRecommendationDraftsAction({
          recommendations: toSave,
        });
        await loadPending();
      } else {
        dispatch({ type: 'idle' });
      }
    } catch (err) {
      dispatch({ type: 'error', message: err instanceof Error ? err.message : 'Error' });
    }
  }

  async function onConfirm(item: Record<string, unknown>) {
    const id = String(item.id);
    const target =
      item.targetService === 'cms' || item.targetService === 'crm'
        ? item.targetService
        : undefined;
    dispatch({ type: 'start' });
    try {
      await confirmRecommendationAction({ id });
      await loadPending();
      await props.onApplied?.(target);
      dispatch({ type: 'idle' });
    } catch (err) {
      dispatch({ type: 'error', message: err instanceof Error ? err.message : 'Confirm failed' });
      await loadPending();
    }
  }

  async function onReject(id: string) {
    dispatch({ type: 'start' });
    try {
      await rejectRecommendationAction({ id });
      await loadPending();
      dispatch({ type: 'idle' });
    } catch (err) {
      dispatch({ type: 'error', message: err instanceof Error ? err.message : 'Reject failed' });
      await loadPending();
    }
  }

  return (
    <section className="space-y-4 rounded-xl border border-border bg-card p-4 text-card-foreground">
      <h2 className="text-lg font-semibold">AI — подтверждаемые рекомендации</h2>
      <form onSubmit={onRequest} className="space-y-2">
        <textarea
          className="min-h-[80px] w-full rounded border border-border bg-background p-2 text-foreground"
          value={state.prompt}
          onChange={(e) => dispatch({ type: 'set_prompt', prompt: e.target.value })}
          placeholder="Запрос: обнови promo, добавь CRM-контакт…"
        />
        <input
          className="w-full rounded border border-border bg-background p-2 text-foreground"
          value={state.missingField}
          onChange={(e) => dispatch({ type: 'set_missing', value: e.target.value })}
          placeholder="Опционально: поле для дозапроса (fullName, tenantId…)"
        />
        <button
          type="submit"
          disabled={state.loading}
          className="rounded bg-foreground px-4 py-2 text-background disabled:opacity-50"
        >
          {state.loading ? '…' : 'Запросить рекомендации'}
        </button>
      </form>
      {state.error ? <p className="text-sm text-destructive">{state.error}</p> : null}
      {state.drafts.length > 0 && (
        <div>
          <h3 className="mb-2 font-medium">Черновики от Python</h3>
          <ul className="space-y-2 text-sm">
            {state.drafts.map((d, i) => (
              <li key={i} className="rounded border border-border p-2">
                [{d.targetService}] {d.title}
                {d.askUserFor ? ` — нужно поле: ${d.askUserFor}` : null}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex gap-2">
        <button type="button" onClick={loadPending} className="text-sm underline">
          Обновить pending
        </button>
      </div>
      <ul className="space-y-2">
        {state.pending.map((p) => (
          <li
            key={String(p.id)}
            className="flex justify-between gap-2 rounded border border-border p-3 text-sm"
          >
            <div>
              <div className="font-medium">{String(p.title)}</div>
              <div className="text-muted-foreground">{String(p.explanation)}</div>
              {p.requiresAdminConfirm ? (
                <span className="text-amber-700 dark:text-amber-400">Требует admin</span>
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                disabled={state.loading}
                className="rounded bg-green-700 px-2 py-1 text-xs text-white disabled:opacity-50"
                onClick={() => onConfirm(p)}
              >
                Confirm + Apply
              </button>
              <button
                type="button"
                disabled={state.loading}
                className="rounded border border-border px-2 py-1 text-xs disabled:opacity-50"
                onClick={() => onReject(String(p.id))}
              >
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
