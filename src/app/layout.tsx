import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Johnny Sousa Ferreira | Software Developer",
  description:
    "Portfólio de Johnny Sousa Ferreira — desenvolvimento web com foco em performance, UI e soluções completas.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Johnny Sousa Ferreira | Software Developer",
    description: "Landing page e portfólio — projetos, experiências e contato.",
    url: "https://example.com",
    siteName: "Johnny Sousa Ferreira",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth theme-gb ${pixelFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
