import { cn } from "../utils";

interface FooterProps {
  name?: string;
  className?: string;
}

export function Footer({ name = "Your Name", className }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer
      className={cn(
        "border-t border-surface-muted bg-surface-warm py-8 mt-16",
        className
      )}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
        <p>
          &copy; {year} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
