'use client';

import { useState } from 'react';
import { adminUpsertSearchDocumentAction } from 'react_common';

export function SearchAdminPanel({ isAdmin }: { isAdmin: boolean }) {
  const [externalKey, setExternalKey] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setMessage('');
    try {
      const result = await adminUpsertSearchDocumentAction({
        externalKey,
        sourceType: 'admin',
        title,
        body,
        status: 'published',
      });
      setMessage(
        result.unchanged
          ? `Без изменений: ${result.documentId}`
          : `Проиндексировано частей: ${result.chunks}`,
      );
    } catch (cause) {
      setMessage(cause instanceof Error ? cause.message : 'Indexing failed');
    }
  }

  if (!isAdmin) {
    return <p className="text-sm text-gray-600">Индексирование доступно только admin.</p>;
  }

  return (
    <form onSubmit={submit} className="max-w-2xl space-y-3">
      <input
        required
        value={externalKey}
        onChange={(event) => setExternalKey(event.target.value)}
        placeholder="Внешний ключ"
        className="w-full rounded border px-3 py-2"
      />
      <input
        required
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Заголовок"
        className="w-full rounded border px-3 py-2"
      />
      <textarea
        required
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder="Текст документа"
        rows={8}
        className="w-full rounded border px-3 py-2"
      />
      <button className="rounded bg-black px-4 py-2 text-white">
        Опубликовать и индексировать
      </button>
      {message ? <p className="text-sm">{message}</p> : null}
    </form>
  );
}
