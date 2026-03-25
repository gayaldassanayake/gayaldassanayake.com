import { Button } from "@repo/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Blog",
  description: "Personal finance insights in English and Sinhala.",
};

export default function FinanceLandingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Personal Finance,{" "}
        <span className="text-brand-orange">Simplified.</span>
      </h1>
      <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
        Practical insights on investing, budgeting, and building wealth —
        available in English and Sinhala.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/en" size="lg">
          Read in English
        </Button>
        <Button href="/si" variant="outline" size="lg">
          සිංහලෙන් කියවන්න
        </Button>
      </div>
    </div>
  );
}
