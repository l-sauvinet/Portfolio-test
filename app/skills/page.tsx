"use client";

import React, { useState, useEffect } from "react";

export default function Skills() {
    const skills = [
        { titre: "JavaScript", description: "Langage pour rendre les pages web dynamiques.", image: "/JavaScript-logo.png" },
        { titre: "HTML", description: "Langage structurant le contenu des pages web.", image: "/html.png" },
        { titre: "CSS", description: "Langage pour concevoir l'apparence des pages web.", image: "/css.png" },
        { titre: "PHP", description: "Langage serveur pour générer des pages dynamiques.", image: "/php.png" },
        { titre: "DOCKER", description: "Plateforme de conteneurisation.", image: "/docker.png" },
        { titre: "SQL", description: "Langage pour manipuler des bases de données.", image: "/sql.png" },
        { titre: "Symfony", description: "Framework PHP robuste.", image: "/symfony.png" },
        { titre: "React", description: "Bibliothèque pour interfaces utilisateur.", image: "/react.png" },
        { titre: "Next.js", description: "Framework pour le rendu côté serveur.", image: "/nextjs.png" },
        { titre: "TypeScript", description: "Superset de JavaScript avec typage.", image: "/typescript.png" }
    ];
    return (
        <section className="Skill-section">
            <h1 className="Skills-title">My Skills</h1>
            <div className="Skill-content">
                {skills.map((skill, index) => (
                    <div key={index} className="skills">
                        <img src={skill.image} alt={skill.titre} className="skill-image" />
                        <h2 className="Skill-text">{skill.titre}</h2>
                        <p className="Skill-description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
