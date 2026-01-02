import Image from "next/image";
import { projects } from "@/components/content/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Portfolio
        </h2>
        <p className="max-w-3xl text-muted-foreground text-[12px]">
          On construction...
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="pixel-card pixel-clip-10 p-5">
              {p.image ? (
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl border">
                  <Image
                    src={p.image}
                    alt={`Imagem do projeto ${p.title}`}
                    fill
                    className="object-cover bg-white"
                  />
                </div>
              ) : null}

              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-[12px] text-muted-foreground">
                {p.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="pixel-chip pixel-clip-8 px-2 py-1 text-[10px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {p.links?.demo ? (
                  <a
                    className="underline underline-offset-4"
                    href={p.links.demo}
                  >
                    Demo
                  </a>
                ) : null}
                {p.links?.github ? (
                  <a
                    className="underline underline-offset-4"
                    href={p.links.github}
                  >
                    GitHub
                  </a>
                ) : null}
                {p.links?.caseStudy ? (
                  <a
                    className="underline underline-offset-4 text-[12px]"
                    href={p.links.caseStudy}
                  >
                    {p.links.caseStudy === "https://ogvcolor.com/"
                      ? "WebSite"
                      : "Case Study"}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
