'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { loginAction } from 'react_common';
import { ThemeToggle } from '../_components/theme-toggle';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@comfort.local');
  const [password, setPassword] = useState('comfort123');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      await loginAction({ email, password });
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Неверный email или пароль');
    }
  }

  return (
    <main className="relative mx-auto max-w-md p-8">
      <ThemeToggle className="absolute right-8 top-8" />
      <h1 className="mb-4 text-xl font-semibold text-foreground">Вход</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full rounded border border-border bg-card px-3 py-2 text-foreground"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full rounded border border-border bg-card px-3 py-2 text-foreground"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded bg-foreground py-2 text-background"
        >
          Войти
        </button>
      </form>
      {error ? <p className="mt-2 text-sm text-destructive">{error}</p> : null}
      <p className="mt-4 text-sm text-muted-foreground">
        <Link href="/register" className="underline text-foreground">
          Регистрация
        </Link>
      </p>
    </main>
  );
}
