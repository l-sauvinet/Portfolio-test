"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/projets", label: "Projets", key: "projects" },
    { href: "/", label: "Accueil", key: "home" },
    { href: "/contact", label: "Contact", key: "contact" },
  ];

  const orderedLinks = (() => {
    if (pathname === "/contact") {
      return [
        links[1],
        links[2],
        links[0],
      ];
    } else if (pathname === "/projets") {
      return [
        links[2],
        links[0],
        links[1],
      ];
    }
    return links;
  })();

  return (
    <nav className="Navbar">
      <div className="Navbar-content">
        <div className="Navbar-title">
          <img src="/code-icon.svg" alt="Logo" />
          Sauvinet Lucas
        </div>
        <div className="Navbar-menu">
          {orderedLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`Navbar-menu-link ${
                pathname === link.href ? 'active' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="social-icons">
          <a title="Lien vers GitHub" href="https://github.com/l-sauvinet">
            <img src="/gitHub-icon.svg" alt="GitHub" />
          </a>
          <a title="Lien vers LinkedIn" href="https://www.linkedin.com/in/lucas-sauvinet-3607162a4/">
            <img src="/linkdln-icon.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </nav>
  );
}
