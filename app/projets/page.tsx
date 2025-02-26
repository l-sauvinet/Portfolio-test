"use client";

import React, { useState, useEffect } from "react";

export default function Projets() {
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    const projects = [
        { titre: "Kalydian", description: "Kalydian est une application de gestion et de partage de mots de passe sécuriser", images:[
          {
            name: "logo-todoList",
            lien:"/kalydian-logo.png"
          },
          {
            name: "logo-todoList",
            lien:"/kalydian-view1.png"
          }
        ], skill: "Stimulus, PHP(Symfony), Docker, SQL, scss", url: "", lieu: "Travail" },
        { titre: "Assistium", description: "Assistance utilisateur intelligente", images:[
          {
            name: "logo-todoList",
            lien:"/assistium-logo.png"
          },
          {
            name: "logo-todoList",
            lien:"/assistium-view1.png"
          }
        ], skill: "JavaScript, CSS, HTML", url: "", lieu: "Perso" },
        { titre: "Portfolio", description: "Mon site personnel", images:[
          {
            name: "logo-todoList",
            lien:"/portfolio-logo.png"
          },
          {
            name: "logo-todoList",
            lien:"/portfolio-view1.png"
          }
        ], skill: "React + Next.js(TypeScript), CSS", url: "", lieu: "Perso" },
        { titre: "PassGuard", description: "Gestion sécurisée des mots de passe", images:[
          {
            name: "logo-todoList",
            lien:"/passGuard-logo.png"
          },
          {
            name: "logo-todoList",
            lien:"/passGuard-view1.png"
          }
        ], skill: "React + Next.js(JavaScript), CSS, HTML", url: "", lieu: "Perso" },
        { titre: "TodoList", description: "Gestion des tâches simplifiée", images:[
          {
            name: "logo-todoList",
            lien:"/todoList-logo.png"
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
            <h1 className="Project-title">My Projects</h1>
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
                      <div className="modal-header">
                        <span className="modal-close" onClick={closeModal}>&times;</span>
                        <h2 className="modal-title">{selectedProject.titre}</h2>
                      </div>
                      <div className="modal-info">
                        <img className="modal-image" src={selectedProject.images? selectedProject.images[1].lien: selectedProject.image1} alt={selectedProject.images? selectedProject.images[1].name: selectedProject.image1}/>
                        <div className="info">
                          <p className="modal-desc">{selectedProject.description}</p>
                          <div className="tech">
                            <p className="modal-skills"><strong>Compétences :</strong> {selectedProject.skill}</p>
                            {selectedProject.url && (
                                <p><strong>URL :</strong> <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">{selectedProject.url}</a></p>
                            )}
                            <p><strong>Lieu :</strong> {selectedProject.lieu}</p>
                          </div>
                        </div>
                      </div>
                       
                    </div>
                </div>
            )}
        </section>
    );
}
