import type { Metadata } from "next";
import { Barlow_Condensed, Chivo } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
  variable: "--font-display",
});
const body = Chivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Ajinkya Gokule | Product, software & side quests",
  description:
    "Product builder and software engineer working on AI systems, agent security, and research. Previously at Microsoft Cloud + AI. Computer science master's student at Oregon State University.",
  authors: [{ name: "Ajinkya Gokule" }],
  openGraph: {
    title: "Ajinkya Gokule | Product, software & side quests",
    description:
      "From Microsoft product and engineering work to AI research and hackathon projects. An interactive collection of work by Ajinkya Gokule.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
