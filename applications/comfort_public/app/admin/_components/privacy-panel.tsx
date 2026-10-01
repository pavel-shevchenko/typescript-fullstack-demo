'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  deletePersonalDataAction,
  exportPersonalDataAction,
  logoutAction,
} from 'react_common';

export function PrivacyPanel() {
  const router = useRouter();
  const [confirmation, setConfirmation] = useState('');
  const [message, setMessage] = useState('');

  async function exportData() {
    setMessage('');
    try {
      const data = await exportPersonalDataAction();
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `comfort-personal-data-${new Date().toISOString()}.json`;
      anchor.click();
      URL.revokeObjectURL(url);
      setMessage('Экспорт подготовлен.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Export failed');
    }
  }

  async function deleteData() {
    if (confirmation !== 'DELETE') return;
    setMessage('');
    try {
      const result = await deletePersonalDataAction();
      await logoutAction();
      setMessage(`Удалено. Correlation ID: ${result.correlationId}`);
      router.replace('/register');
      router.refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Delete failed');
    }
  }

  return (
    <section className="space-y-4 rounded-xl border p-4">
      <div>
        <h2 className="text-lg font-semibold">Персональные данные</h2>
        <p className="text-sm text-gray-600">
          Экспорт объединяет данные CMS и CRM. Удаление необратимо; межсервисные
          шаги журналируются по correlation ID.
        </p>
      </div>
      <button
        type="button"
        className="rounded border px-3 py-2"
        onClick={exportData}
      >
        Скачать JSON-экспорт
      </button>
      <div className="space-y-2 border-t pt-4">
        <label className="block text-sm">
          Для удаления введите <strong>DELETE</strong>
          <input
            className="mt-1 block w-full rounded border p-2"
            value={confirmation}
            onChange={(event) => setConfirmation(event.target.value)}
          />
        </label>
        <button
          type="button"
          className="rounded bg-red-700 px-3 py-2 text-white disabled:opacity-50"
          disabled={confirmation !== 'DELETE'}
          onClick={deleteData}
        >
          Удалить мои данные
        </button>
      </div>
      {message ? <p className="text-sm">{message}</p> : null}
    </section>
  );
}
