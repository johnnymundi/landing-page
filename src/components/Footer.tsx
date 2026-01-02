export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Johnny Sousa Ferreira</p>
          <p className="text-xs">
            Built with Next.js + Tailwind • Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
