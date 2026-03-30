import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@repo/ui";
import { Footer } from "@repo/ui";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Gayal Dassanayake",
    template: "%s | Gayal Dassanayake",
  },
  description: "Software engineer, builder, and content creator.",
};

const navItems = [
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <Navbar items={navItems} logo="Gayal Dassanayake" logoHref="/" />
        <main className="min-h-screen">{children}</main>
        <Footer name="Gayal Dassanayake" />
      </body>
    </html>
  );
}
