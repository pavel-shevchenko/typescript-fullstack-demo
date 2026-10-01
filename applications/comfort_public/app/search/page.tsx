import Link from 'next/link';
import { ThemeToggle } from '../_components/theme-toggle';
import { SearchClient } from './_components/search-client';

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-10">
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-foreground">Поиск</h1>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm underline text-foreground">
            На главную
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <SearchClient />
    </main>
  );
}
