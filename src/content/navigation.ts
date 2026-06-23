// Navigation links. Route-based (multi-page site). Mirrors src/app/* routes.

export type NavLink = { href: string; label: string };

export const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/startup", label: "Startup" },
  { href: "/work", label: "Work" },
  { href: "/building", label: "Building" },
  { href: "/contact", label: "Contact" },
];
