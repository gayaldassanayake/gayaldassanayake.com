import { Noto_Sans_Sinhala } from "next/font/google";

const notoSansSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  variable: "--font-sinhala",
  display: "swap",
});

export default function SinhalaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="si" className={`${notoSansSinhala.variable}`} style={{ fontFamily: "var(--font-sinhala), sans-serif" }}>
      {children}
    </div>
  );
}
