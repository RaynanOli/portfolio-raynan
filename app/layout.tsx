import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeScript } from "@/components/ThemeScript";
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
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen overflow-x-clip bg-background font-sans text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
