'use client';

import { useState } from 'react';
import { publicSearchAction, type PublicSearchResult } from 'react_common';

export function SearchClient() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<PublicSearchResult | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      setResult(await publicSearchAction({ query, page: 1, pageSize: 20 }));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Search failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5">
      <form onSubmit={submit} className="flex gap-2">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          minLength={1}
          maxLength={500}
          required
          className="flex-1 rounded border px-3 py-2"
          placeholder="Найти в опубликованных материалах"
        />
        <button
          disabled={loading}
          className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? 'Поиск…' : 'Найти'}
        </button>
      </form>
      {error ? <p className="text-red-600">{error}</p> : null}
      {result ? (
        <section className="space-y-3">
          <p className="text-sm text-gray-500">Найдено: {result.totalCount}</p>
          {result.items.map((item) => (
            <article key={item.chunkId} className="rounded border p-4">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-1 text-sm text-gray-700">{item.excerpt}</p>
              {item.url ? (
                <a href={item.url} className="mt-2 inline-block text-sm underline">
                  Открыть
                </a>
              ) : null}
            </article>
          ))}
        </section>
      ) : null}
    </div>
  );
}
