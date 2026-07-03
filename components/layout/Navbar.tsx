import Link from "next/link";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { navigationLinks } from "@/lib/navigation-links";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            O Ninho
          </Link>

          {/* Menu */}
          <ul className="flex items-center gap-10">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-medium transition-colors hover:text-[var(--primary)]"
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