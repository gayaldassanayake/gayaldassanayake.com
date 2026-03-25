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
    default: "Finance Blog",
    template: "%s | Finance Blog",
  },
  description: "Personal finance insights in English and Sinhala.",
};

const navItems = [
  { label: "English", href: "/en" },
  { label: "සිංහල", href: "/si" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <Navbar items={navItems} logo="Finance" />
        <main className="min-h-screen">{children}</main>
        <Footer name="Gayal Dassanayake" />
      </body>
    </html>
  );
}
