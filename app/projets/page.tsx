"use client";

import React, { useState, useEffect } from "react";

export default function Projets() {
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    const skills = [
        { titre: "JavaScript", description: "Langage pour rendre les pages web dynamiques.", image: "/JavaScript-logo.png" },
        { titre: "HTML", description: "Langage structurant le contenu des pages web.", image: "/html.png" },
        { titre: "CSS", description: "Langage pour concevoir l'apparence des pages web.", image: "/css.png" },
        { titre: "PHP", description: "Langage serveur pour générer des pages dynamiques.", image: "/php.png" },
        { titre: "DOCKER", description: "Plateforme de conteneurisation.", image: "/docker.png" },
        { titre: "SQL", description: "Langage pour manipuler des bases de données.", image: "/sql.png" },
        { titre: "Symfony", description: "Framework PHP robuste.", image: "/symfony.png" },
        { titre: "Stimulus", description: "Framework JS léger.", image: "/stimulus.png" },
        { titre: "React", description: "Bibliothèque pour interfaces utilisateur.", image: "/react.png" },
        { titre: "Next.js", description: "Framework pour le rendu côté serveur.", image: "/nextjs.png" },
        { titre: "TypeScript", description: "Superset de JavaScript avec typage.", image: "/typescript.png" }
    ];

    const projects = [
        { titre: "Kalydian", description: "Gestion avancée de données", images:[
          {
            name: "logo-todoList",
            lien:"/kalydian-view1.png"
          },
          {
            name: "logo-todoList",
            lien:"/todoList-view2.png"
          }
        ], skill: "Stimulus, PHP(Symfony), Docker, SQL, scss", url: "", lieu: "Travail" },
        { titre: "Assistium", description: "Assistance utilisateur intelligente", images:[
          {
            name: "logo-todoList",
            lien:"/assistium-view1.png"
          },
          {
            name: "logo-todoList",
            lien:"/todoList-view2.png"
          }
        ], skill: "JavaScript, CSS, HTML", url: "", lieu: "Perso" },
        { titre: "Portfolio", description: "Mon site personnel", images:[
          {
            name: "logo-todoList",
            lien:"/portfolio-view1.png"
          },
          {
            name: "logo-todoList",
            lien:"/todoList-view2.png"
          }
        ], skill: "React + Next.js(TypeScript), CSS", url: "", lieu: "Perso" },
        { titre: "PassGuard", description: "Gestion sécurisée des mots de passe", images:[
          {
            name: "logo-todoList",
            lien:"/passGuard-view1.png"
          },
          {
            name: "logo-todoList",
            lien:"/todoList-view2.png"
          }
        ], skill: "React + Next.js(JavaScript), CSS, HTML", url: "", lieu: "Perso" },
        { titre: "TodoList", description: "Gestion des tâches simplifiée", images:[
          {
            name: "logo-todoList",
            lien:"/todoList-view1.png"
          },
          {
            name: "logo-todoList",
            lien:"/todoList-view2.png"
          }
        ], skill: "JavaScript, CSS, HTML", url: "", lieu: "Perso" }
    ];

    // Empêche le scroll du body quand la modale est ouverte
    useEffect(() => {
        if (selectedProject) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [selectedProject]);

    const openModal = (projet: any) => {
        setSelectedProject(projet);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="Skill-section">
            <h1 className="Skills-title">Compétences :</h1>
            <div className="Skill-content">
                {skills.map((skill, index) => (
                    <div key={index} className="skills">
                        <img src={skill.image} alt={skill.titre} className="skill-image" />
                        <h2 className="Skill-text">{skill.titre}</h2>
                        <p className="Skill-description">{skill.description}</p>
                    </div>
                ))}
            </div>

            <h1 className="Project-title">Mes Projets</h1>
            <div className="Project-content">
                {projects.map((projet: any, index) => (
                    <div key={index} className="Projects">
                      <h2 className="project-title">{projet.titre}</h2>
                      <div className="projet-card">
                          <img
                              src={projet.images? projet.images[0].lien: projet.image1}
                              alt={projet.images? projet.images[0].name: projet.image1}
                              className="project-image"
                              onClick={() => openModal(projet)}
                          />
                      </div>
                    </div>
                ))}
            </div>

            {/* MODALE */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="modal-close" onClick={closeModal}>&times;</span>
                        <h2>{selectedProject.titre}</h2>
                        <img src={selectedProject.images? selectedProject.images[1].lien: selectedProject.image1} alt={selectedProject.images? selectedProject.images[1].name: selectedProject.image1} className="modal-image" />
                        <p>{selectedProject.description}</p>
                        <p><strong>Compétences :</strong> {selectedProject.skill}</p>
                        {selectedProject.url && (
                            <p><strong>URL :</strong> <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">{selectedProject.url}</a></p>
                        )}
                        <p><strong>Lieu :</strong> {selectedProject.lieu}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
