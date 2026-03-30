"use client";

import { useState } from "react";
import { cn } from "../utils";

interface NavItem {
  label: string;
  href: string;
  newTab?: boolean;
}

interface NavbarProps {
  items: NavItem[];
  logo?: React.ReactNode;
  logoHref?: string;
  className?: string;
}

export function Navbar({ items, logo, logoHref, className }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const logoEl = logoHref ? (
    <a href={logoHref} className="hover:opacity-80 transition-opacity">
      {logo}
    </a>
  ) : (
    logo
  );

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-surface-muted",
        className
      )}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-heading text-xl font-bold">{logoEl}</div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-6 h-0.5 bg-foreground transition-transform duration-200", open && "translate-y-2 rotate-45")} />
          <span className={cn("block w-6 h-0.5 bg-foreground transition-opacity duration-200", open && "opacity-0")} />
          <span className={cn("block w-6 h-0.5 bg-foreground transition-transform duration-200", open && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-surface-muted bg-white/95 backdrop-blur-md">
          <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
