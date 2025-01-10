import NavbarHome from '../components/NavbarHome';
import './globals.css';
import './background.css';

export const metadata = {
  title: 'Portfolio',
  description: 'Mon portfolio personnel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* Conteneur pour les étoiles */}
        <div id="star-container">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
        <NavbarHome />
        <main className="HomePage">{children}</main>
      </body>
    </html>
  );
}
