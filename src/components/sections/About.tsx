export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="space-y-4">
        <h2 className="text-[16px] font-semibold tracking-tight sm:text-[20px]">
          About me
        </h2>

        <p className="max-w-3xl text-muted-foreground text-[12px]">
          I work with modern front-end and back-end, building products with
          authentication, dashboards, integrations, and real-time features
          (WebSocket).
        </p>

        <p className="max-w-3xl text-muted-foreground text-[12px]">
          Professionaly, as a Software Developer, I am currently working with
          React, Node and Django.
        </p>

        <p className="max-w-3xl text-muted-foreground text-[12px]">
          For enhancing my technical skills, I am focused on building scalable
          web applications using React or Angular, but focusing mainly on clean
          architecture, performance, and great user experience using Java Spring
          Boot.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium text-[12px]">What I deliver</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[12px] text-muted-foreground">
              <li>Fast interfaces and consistent (design system)</li>
              <li>APIs and integrations (REST/WebSocket)</li>
              <li>Performance in lists/tables and complex UI</li>
              <li>Deploy and infrastructure (Docker/VPS when necessary)</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-medium text-[12px]">Main Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground text-[12px]">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Django",
                "Node.js",
                "Angular",
                "PostgreSQL",
                "Tailwind",
                "Java",
                "MongoDB",
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
        </div>
      </div>
    </section>
  );
}
