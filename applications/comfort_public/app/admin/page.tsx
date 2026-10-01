import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSessionAction } from 'react_common';
import { ThemeToggle } from '../_components/theme-toggle';
import { AdminDashboard } from './_components/admin-dashboard';

export default async function AdminPage() {
  const session = await getSessionAction();
  if (!session?.user) redirect('/login');

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-8">
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-foreground">Comfort Admin</h1>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm text-foreground underline">
            На лендинг
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <p className="text-muted-foreground">
        {session.user.email} ({session.user.role}) — JWT в httpOnly cookie. AI: request → pending →
        confirm → apply.
      </p>
      <AdminDashboard authorUserId={session.user.id} role={session.user.role} />
    </main>
  );
}
