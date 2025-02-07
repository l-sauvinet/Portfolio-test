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

    const projects = [
      { titre: 'Kalydian', description: '', image1: '/kalydian-logo.png', skill: 'Stimulus, PHP(Symfony), Docker, SQL, scss', url:'', lieu: 'Travail'},
      { titre: 'Assistium', description: '', image1: '/assistium-logo.png', skill: 'JavaScript, css, html', url:'', lieu: 'Perso'},
      { titre: 'Portfolio', description: '', image1: '/portfolio-logo.png', skill: 'React + Next.js(TypeScript), css', url:'', lieu: 'Perso'},
      { titre: 'PassGuard', description: '', image1: '/passGuard-logo.png', skill: 'React + Next.js(JavaScript), css, html', url:'', lieu: 'Perso'},
      { titre: 'TodoList', description: '', image1: '/todoList-logo.png', skill: 'JavaScript, css, html', url:'', lieu: 'Perso'}
    ];
  
    return (
      <section className="Skill-section">
        <h1 className="Skills-title">Competences :</h1>
        <div className="Skill-content">
          {skills.map((skill, index) => (
            <div key={index} className="skills">
              {/* Image de la compétence */}
              <img src={skill.image} alt={skill.titre} className="skill-image" />
              {/* Texte qui apparaît au survol */}
              <h2 className=" Skill-text">{skill.titre}</h2>
              <p className="Skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
        <h1 className="Project-title">Mes Projets</h1>
        <div className="Project-content">
          {projects.map((projet:any, index) => (
            <div key={index} className="Projects">
              <h2 className="project-title">{projet.titre}</h2>
              <img src={projet.image1} alt={projet.titre} className="project-image" />
              {/* <p className="project-description">{projet.description}</p>
              <p className="project-skill">{projet.skill}</p>
              <p className="project-url">{projet.url}</p>
              <p className="project-place">{projet.lieu}</p> */}
            </div>
          ))}
        </div>
      </section>
    );
  }
  