'use client';

import { useEffect, useState } from 'react';
import {
  listArticleHeroFilesAction,
  removeArticleHeroFileAction,
  uploadArticleHeroFileAction,
  type ArticleHeroFile,
} from 'react_common';

export function ArticleHeroFilesAdmin({ articleId }: { articleId: string }) {
  const [files, setFiles] = useState<ArticleHeroFile[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function refresh() {
    if (!/^\d+$/.test(articleId)) {
      setFiles([]);
      return;
    }
    setLoading(true);
    try {
      setFiles(await listArticleHeroFilesAction(articleId));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'List failed');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!/^\d+$/.test(articleId)) {
      setFiles([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    void listArticleHeroFilesAction(articleId)
      .then((next) => {
        if (!cancelled) setFiles(next);
      })
      .catch((error) => {
        if (!cancelled) {
          setMessage(error instanceof Error ? error.message : 'List failed');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [articleId]);

  async function upload(formData: FormData) {
    setMessage('');
    try {
      await uploadArticleHeroFileAction(formData);
      await refresh();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Upload failed');
    }
  }

  if (!/^\d+$/.test(articleId)) {
    return (
      <p className="text-sm text-muted-foreground">
        Сохраните статью, чтобы загрузить hero-изображения.
      </p>
    );
  }

  return (
    <section className="space-y-3">
      <h3 className="font-medium">Hero-файлы статьи #{articleId}</h3>
      <form action={upload} className="flex flex-wrap items-center gap-2">
        <input type="hidden" name="articleId" value={articleId} />
        <input
          type="file"
          name="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          required
        />
        <button className="rounded bg-foreground px-3 py-1 text-background" type="submit">
          Загрузить
        </button>
        <button
          className="rounded border border-border px-3 py-1"
          type="button"
          onClick={() => void refresh()}
          disabled={loading}
        >
          Обновить список
        </button>
      </form>
      {message ? <p className="text-sm text-destructive">{message}</p> : null}
      <ul className="space-y-2 text-sm">
        {files.map((file, index) => (
          <li
            className="flex items-center justify-between rounded border border-border p-2"
            key={file.objectName}
          >
            <span>
              {file.originalName} ({Math.ceil(file.size / 1024)} KB)
            </span>
            <button
              className="rounded border border-border px-2 py-1"
              type="button"
              onClick={async () => {
                await removeArticleHeroFileAction(articleId, index);
                await refresh();
              }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
