import { cn } from "../utils";

const accentClassMap: Record<string, string> = {
  cyan: "border-t-brand-cyan",
  orange: "border-t-brand-orange",
  yellow: "border-t-brand-yellow",
  purple: "border-t-brand-purple",
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: "cyan" | "orange" | "yellow" | "purple";
}

export function Card({ children, className, accentColor }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface-warm rounded-2xl p-6 transition-all duration-200",
        "hover:-translate-y-3 hover:shadow-[0px_30px_40px_-15px_rgba(194,179,164,0.6)]",
        accentColor && `border-t-4 ${accentClassMap[accentColor]}`,
        className
      )}
    >
      {children}
    </div>
  );
}
