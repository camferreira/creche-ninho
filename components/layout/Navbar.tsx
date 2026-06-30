import Link from "next/link";

import Container from "../ui/Container";
import { navigationLinks } from "@/lib/navigation-links";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold transition-colors hover:text-[var(--primary)]"
          >
            O Ninho
          </Link>

          <ul className="flex items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[var(--primary)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}