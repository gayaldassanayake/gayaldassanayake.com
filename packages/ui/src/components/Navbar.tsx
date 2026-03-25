import { cn } from "../utils";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
  logo?: React.ReactNode;
  className?: string;
}

export function Navbar({ items, logo, className }: NavbarProps) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-surface-muted",
        className
      )}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-heading text-xl font-bold">{logo}</div>
        <ul className="flex gap-6">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
