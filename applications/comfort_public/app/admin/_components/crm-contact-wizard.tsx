'use client';

import { useReducer } from 'react';
import { produce } from 'immer';

type WizardState = {
  step: 0 | 1 | 2;
  fullName: string;
  phone: string;
  notes: string;
};

type WizardAction =
  | { type: 'field'; key: keyof Omit<WizardState, 'step'>; value: string }
  | { type: 'next' }
  | { type: 'back' };

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'field':
        draft[action.key] = action.value;
        break;
      case 'next':
        if (draft.step < 2) draft.step += 1;
        break;
      case 'back':
        if (draft.step > 0) draft.step -= 1;
        break;
    }
  });
}

export function CrmContactWizardPreview() {
  const [state, dispatch] = useReducer(wizardReducer, {
    step: 0,
    fullName: '',
    phone: '',
    notes: '',
  });

  return (
    <section className="border rounded p-4 text-sm space-y-3">
      <h3 className="font-medium">CRM contact wizard (demo useReducer)</h3>
      <p className="text-gray-600">Шаг {state.step + 1} / 3 — данные для AI-контекста</p>
      {state.step === 0 ? (
        <input
          className="w-full border rounded p-2"
          placeholder="ФИО"
          value={state.fullName}
          onChange={(e) => dispatch({ type: 'field', key: 'fullName', value: e.target.value })}
        />
      ) : null}
      {state.step === 1 ? (
        <input
          className="w-full border rounded p-2"
          placeholder="Телефон"
          value={state.phone}
          onChange={(e) => dispatch({ type: 'field', key: 'phone', value: e.target.value })}
        />
      ) : null}
      {state.step === 2 ? (
        <textarea
          className="w-full border rounded p-2"
          placeholder="Заметки"
          value={state.notes}
          onChange={(e) => dispatch({ type: 'field', key: 'notes', value: e.target.value })}
        />
      ) : null}
      <div className="flex gap-2">
        <button
          type="button"
          className="border px-2 py-1 rounded"
          disabled={state.step === 0}
          onClick={() => dispatch({ type: 'back' })}
        >
          Назад
        </button>
        <button
          type="button"
          className="bg-black text-white px-2 py-1 rounded"
          disabled={state.step === 2}
          onClick={() => dispatch({ type: 'next' })}
        >
          Далее
        </button>
      </div>
      {state.step === 2 ? (
        <pre className="bg-gray-50 p-2 rounded text-xs">{JSON.stringify(state, null, 2)}</pre>
      ) : null}
    </section>
  );
}
