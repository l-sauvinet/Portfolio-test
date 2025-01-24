export default function Projets() {
    const projets = [
      { titre: 'Projet 1', description: 'Description du projet 1' },
      { titre: 'Projet 2', description: 'Description du projet 2' },
    ];

    const skills = [
      { titre: 'JavaScript', description: 'Langage pour rendre les pages web dynamiques.', image: '/JavaScript-logo.png' },
      { titre: 'HTML', description: 'Langage structurant le contenu des pages web.', image: '/html.png' },
      { titre: 'CSS', description: "Langage pour concevoir l'apparence des pages web.", image: '/css.png' },
      { titre: 'PHP', description: 'Langage serveur pour générer des pages dynamiques.', image: '/php.png' },
      { titre: 'DOCKER', description: 'Plateforme de conteneurisation.', image: '/docker.png' },
      { titre: 'SQL', description: 'Langage pour manipuler des bases de données.', image: '/sql.png' },
      { titre: 'Symfony', description: 'Framework PHP robuste.', image: '/symfony.png' },
      { titre: 'Stimulus', description: 'Framework JS léger.', image: '/stimulus.png' },
      { titre: 'React', description: 'Bibliothèque pour interfaces utilisateur.', image: '/react.png' },
      { titre: 'Next.js', description: 'Framework pour le rendu côté serveur.', image: '/nextjs.png' },
      { titre: 'TypeScript', description: 'Superset de JavaScript avec typage.', image: '/typescript.png' }
    ];
  
    return (
      <section className="Skill-section">
        <h1 className="Skills-title">Mes Competences</h1>
        <div className="Skill-content">
          {skills.map((skill, index) => (
            <div key={index} className="skills">
              {/* Image de la compétence */}
              <img src={skill.image} alt={skill.titre} className="skill-image" />
              {/* Texte qui apparaît au survol */}
              <h2 className="text-xl font-semibold Skill-text">{skill.titre}</h2>
              <p className="Skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-bold mb-6">Mes Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projets.map((projet, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{projet.titre}</h2>
              <p className="text-gray-600 mt-2">{projet.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  