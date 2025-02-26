"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/projets", label: "Project", key: "projects" },
    { href: "/", label: "Home", key: "home" },
    { href: "/skills", label: "Skill", key: "skills" },
  ];

  return (
    <nav className="Navbar">
      <div className="Navbar-content">
        <div className="Navbar-title">
          <img src="/code-icon.svg" alt="Logo" />
          Sauvinet Lucas
        </div>
        <div className="Navbar-menu">
          {links.map((link) => (
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
          <a title="Envoyer un Email" href="/contact">
            <img src="/email-icon.svg" alt="GitHub" />
          </a>
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
