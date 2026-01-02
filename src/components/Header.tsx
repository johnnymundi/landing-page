export default function Header() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Curiosities", href: "#curiosities" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 pixel-hud">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="text-[12px] pixel-link">
          Johnny
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {[
            { label: "About", href: "#about" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "Curiosities", href: "#curiosities" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="text-[11px] pixel-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="pixel-btn pixel-clip-8 px-3 py-2 text-[10px]"
        >
          Let’s talk
        </a>
      </div>
    </header>
  );
}
