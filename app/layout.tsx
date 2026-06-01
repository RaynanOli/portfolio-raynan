import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raynan Maciel | Desenvolvedor de Sistemas, BI e IA",
  description:
    "Portfólio de Raynan Maciel — desenvolvimento de sistemas, Business Intelligence, automação de processos e soluções com Inteligência Artificial.",
  keywords: [
    "Raynan Maciel",
    "desenvolvedor",
    "Business Intelligence",
    "Power BI",
    "automação",
    "inteligência artificial",
    "Next.js",
  ],
  authors: [{ name: "Raynan Maciel" }],
  openGraph: {
    title: "Raynan Maciel | Desenvolvedor de Sistemas, BI e IA",
    description:
      "Desenvolvimento de sistemas, Business Intelligence, automação de processos e soluções com Inteligência Artificial.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#030712] font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
