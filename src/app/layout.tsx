import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ajinkya Gokule — Software Engineer",
  description:
    "Ajinkya Gokule. Software engineer and AI / multi-agent systems builder. Microsoft Security PM intern, OSU CS + MS-AI, 5× hackathon winner.",
  authors: [{ name: "Ajinkya Gokule" }],
  openGraph: {
    title: "Ajinkya Gokule — Software Engineer",
    description:
      "Software engineer and AI / multi-agent systems builder. Currently at Microsoft Security, OSU Genesis Team, and HP Engineering Modelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
