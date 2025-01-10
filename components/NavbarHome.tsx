import Link from 'next/link';

export default function NavbarHome() {
  return (
    <nav className="Navbar">
      <div className="Navbar-content">
        <div className="Navbar-title"><img src="/code-icon.svg"/>Sauvinet Lucas</div>
        <div className="Navbar-menu">
          <Link href="/projets" className="Navbar-menu-link">Projets</Link>
          <Link href="/" className="Navbar-menu-link active">Accueil</Link>
          <Link href="/contact" className="Navbar-menu-link">Contact</Link>
        </div>
        <div className='social-icons'>
          <a title='Lien vers GitHub' href='https://github.com/l-sauvinet'><img src="/gitHub-icon.svg"/></a>
          <a title='Lien vers LinkdIn' href='https://www.linkedin.com/in/lucas-sauvinet-3607162a4/'><img src="/linkdln-icon.svg"/></a>
        </div>
      </div>
    </nav>
  );
}
