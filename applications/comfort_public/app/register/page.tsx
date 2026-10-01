'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { registerAction } from 'react_common';
import { ThemeToggle } from '../_components/theme-toggle';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await registerAction({ email, password });
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Не удалось зарегистрироваться');
    }
  }

  return (
    <main className="relative mx-auto max-w-md p-8">
      <ThemeToggle className="absolute right-8 top-8" />
      <h1 className="mb-4 text-xl font-semibold text-foreground">Регистрация</h1>
      <p className="mb-4 text-sm text-muted-foreground">Без отправки почты — пароль сразу активен.</p>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full rounded border border-border bg-card px-3 py-2 text-foreground"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full rounded border border-border bg-card px-3 py-2 text-foreground"
          type="password"
          placeholder="password (min 6)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />
        <button type="submit" className="w-full rounded bg-foreground py-2 text-background">
          Создать аккаунт
        </button>
      </form>
      {error ? <p className="mt-2 text-sm text-destructive">{error}</p> : null}
      <p className="mt-4 text-sm text-muted-foreground">
        <Link href="/login" className="underline text-foreground">
          Уже есть аккаунт
        </Link>
      </p>
    </main>
  );
}
