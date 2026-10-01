import Link from 'next/link';
import { fetchPublicLandingAction } from 'react_common';
import { ThemeToggle } from './_components/theme-toggle';

export default async function HomePage() {
  const landing = await fetchPublicLandingAction();
  const home = landing.pages.find((p) => p.slug === 'home') ?? landing.pages[0];
  const hero = landing.promos.find((p) => p.code === 'hero-main') ?? landing.promos[0];

  return (
    <main className="relative mx-auto max-w-3xl space-y-8 px-10 pb-10 pt-20">
      <ThemeToggle className="absolute right-10 top-10" />
      {hero ? (
        <section className="space-y-2 rounded-xl bg-muted p-6">
          <h1 className="text-3xl font-bold text-foreground">{String(hero.headline)}</h1>
          <p className="text-lg text-muted-foreground">{String(hero.subline)}</p>
          <Link href={String(hero.ctaHref ?? '/admin')} className="inline-block underline text-foreground">
            {String(hero.ctaLabel ?? 'Подробнее')}
          </Link>
        </section>
      ) : null}
      {home ? (
        <section>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">{String(home.title)}</h2>
          <p className="text-muted-foreground">{String(home.summary)}</p>
          <pre className="mt-4 whitespace-pre-wrap text-sm text-muted-foreground">
            {String(home.bodyMarkdown)}
          </pre>
        </section>
      ) : null}
      {landing.articles.length > 0 ? (
        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">Статьи</h2>
          <ul className="space-y-2">
            {landing.articles.map((a) => (
              <li key={String(a.id)} className="rounded border border-border bg-card p-3">
                <div className="font-medium text-card-foreground">{String(a.title)}</div>
                <div className="text-sm text-muted-foreground">{String(a.excerpt)}</div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <div className="flex gap-4 text-sm text-foreground">
        <Link className="underline" href="/search">
          Поиск
        </Link>
        <Link className="underline" href="/register">
          Регистрация
        </Link>
        <Link className="underline" href="/login">
          Вход
        </Link>
        <Link className="underline" href="/admin">
          Админка
        </Link>
      </div>
    </main>
  );
}
