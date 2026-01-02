const items = [
  {
    title: "PhD in Genetics (Bioinformatics)",
    subtitle:
      "I have a PhD in Genetics, focusing on computational analysis of genomic data where I had identified more the 10.000 olfactory genes in Amphibian genomes from public databases.",
  },
  {
    title: "Scientific Publication with Biology fellows",
    subtitle:
      "I have worked as co-author in scientific paper published in a international journal where we described a new anuran species called Pithecopus gonzagai.",
    link: {
      label: "article link",
      href: "https://ufpr.br/pithecopus-gonzagai-saiba-mais-sobre-a-perereca-que-virou-musica-e-foi-estudada-por-pesquisadores-da-ufpr/",
    },
  },
  {
    title: "Miyazaki, oh my Miyazaki city!",
    subtitle:
      "I had the opportunity to study programming with Dr. Yoshihito Niimura from University of Miyazaki in Japan for almost three months. It was one of the most enriching experiences of my life. Such a beautiful country. Such a wise person",
    // sem link
  },
  {
    title: "I started Programming as a University Student actually!",
    subtitle:
      "Although I finished my coding studies as a PhD Student, for a couple of years I studied Computer Science in the Federal University of Maranhão, in my hometown, when I was 28 years old.",
    // sem link
  },
  {
    title: "Science Teacher, eita!",
    subtitle:
      "As a young adult and a computer science student. I had to support myself financially. So I worked as a science teacher in a private school for some time. I used to teach Biology, Chemistry and Physics for high-school students before I had the opportunity to apply for a PhD in the other part of Brazil.",
  },
  {
    title: "Herpetology at its best!",
    subtitle:
      "Before I realized that my life was too short to not pursue my dream of programming, I workd as a herpetologist doing field work in the Brazilian savannah (Cerrado) and Amazon rainforest. I used to catch snakes, lizards, frogs and toads for a living!",
    link: {
      label: "see some photos (Instagram)",
      href: "https://www.instagram.com/johnnymundi/",
    },
  },
];

export default function Curiosities() {
  return (
    <section id="curiosities" className="py-12">
      <div className="space-y-4">
        <h2 className="text-[16px] sm:text-[18px]">Curiosities</h2>

        <p className="pixel-text text-muted max-w-3xl text-[11px]">
          I think I have done a lot of different things in my life. Here are
          some
        </p>

        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="pixel-card pixel-clip-10 flex flex-col gap-2 p-4"
            >
              {/* Título */}
              <span className="text-[13px]">{item.title}</span>

              {/* Subtítulo */}
              <span className="pixel-text text-muted text-[11px]">
                {item.subtitle}
              </span>

              {/* Link opcional */}
              {item.link ? (
                <a
                  href={item.link.href}
                  target={
                    item.link.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    item.link.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="pixel-link mt-2 inline-block text-[10px]"
                >
                  → {item.link.label}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
