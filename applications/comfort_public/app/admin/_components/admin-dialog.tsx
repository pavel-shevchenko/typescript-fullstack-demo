'use client';

import { useEffect } from 'react';

export function AdminDialog(props: {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!props.open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') props.onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [props.open, props.onClose]);

  if (!props.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-16">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-dialog-title"
        className="w-full max-w-xl rounded-lg border border-border bg-card p-5 text-card-foreground shadow-lg"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h2 id="admin-dialog-title" className="text-lg font-semibold">
            {props.title}
          </h2>
          <button
            type="button"
            onClick={props.onClose}
            className="rounded border border-border px-2 py-1 text-sm hover:bg-muted"
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export function PlusIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 3.5a.75.75 0 0 1 .75.75V9.25h5a.75.75 0 0 1 0 1.5h-5v5a.75.75 0 0 1-1.5 0v-5h-5a.75.75 0 0 1 0-1.5h5V4.25A.75.75 0 0 1 10 3.5Z"
      />
    </svg>
  );
}

export function PencilIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.2 3.3a1.5 1.5 0 0 1 2.12 0l1.38 1.38a1.5 1.5 0 0 1 0 2.12l-8.4 8.4a1 1 0 0 1-.45.26l-3.3.82a.5.5 0 0 1-.6-.6l.82-3.3a1 1 0 0 1 .26-.45l8.17-8.63Zm1.06 1.06-8.17 8.63-.46 1.83 1.83-.46 8.4-8.4-1.6-1.6Z"
      />
    </svg>
  );
}
