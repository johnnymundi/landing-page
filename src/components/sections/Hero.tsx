import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="py-14 sm:py-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <p className="text-[11px] text-muted-foreground">
            Software Developer • Angular / React / Vite / Next.js / Django /
            Node / Java
          </p>

          <h1 className="text-[16px] font-semibold tracking-tight sm:text-[22px]">
            Johnny Sousa Ferreira
          </h1>

          <p className="text-[11px] text-muted-foreground">
            Curitiba, Paraná, Brazil - available for remote work
          </p>

          <p className="max-[12px] text-base text-muted-foreground sm:text-[12px] pt-2">
            I build full-stack web applications with focus on performance, user
            experience, and clean architecture. Here you can find projects,
            technologies, and how to contact me.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="rounded-lg bg-foreground px-4 py-2 text-[11px] text-background transition hover:opacity-90 pixel-chip pixel-clip-8"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border px-4 py-2 text-[11px] transition hover:bg-muted pixel-chip pixel-clip-8"
            >
              Contact me
            </a>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {[
              "TypeScript",
              "React",
              "Vite",
              "Next.js",
              "Angular",
              "Django",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "WebSocket",
              "Java",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border px-2 py-1 pixel-chip pixel-clip-8"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border sm:h-72 sm:w-72 pixel-frame">
            <Image
              src="/me.jpeg"
              alt="Foto de Johnny Sousa Ferreira"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
