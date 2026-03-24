"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectCursor from "./ui/project-cursor";
import styles from "@/app/_styles/projects.module.css";

const projectData = [
  {
    title: "Wakely",
    description:
      "Designed in Figma and built with Flutter, I created this app with one clear goal: to make the user experience as polished as its design. It offers both light and dark modes with a consistent look and feel throughout.",
    tags: ["Figma", "Flutter", "Dart"],
    image: "/images/wakely.png",
    alt: "Wakely App",
    link: "/images/wakely.png",
  },
  {
    title: "Lakeview Apartments",
    description:
      "For LakeView, I built a clean, responsive single-page website tailored to my client's needs. Using a Mobile First approach, I ensured a user-friendly experience that has drawn thousands of visitors since its launch.",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    image: "/images/lakeview.png",
    alt: "Lakeview Apartments Website",
    link: "https://www.lakeviewprzewiez.pl/",
  },
  {
    title: "Sushi Project",
    description:
      "While learning Vite, I brought a Pickolab Studio design to life, focusing on swift loading times and smooth animations. The visual concept is theirs, but turning it into a fast, animated website was the challenge I took on.",
    tags: ["Vite", "HTML", "CSS", "JavaScript"],
    image: "/images/sushi.png",
    alt: "Sushi Project Website",
    link: "https://sushi-project-malcewicz.vercel.app/",
  },
];

const Projects = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCursor = (value: boolean) => {
    setIsActive(value);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="heading">
        <h2>Recent Work</h2>
        <div className="wrapper">
          <p className="subtitle">
            UI design and front-end development are where my genuine interest in
            how things look and work comes to life, through personal projects
            and client work alike. Each one is built with attention to detail
            and user experience in mind.
          </p>
        </div>
      </div>

      {/* Project Content */}
      <div className={styles.content}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.project}>
            <div
              className={styles.image}
              onClick={() => window.open(project.link, "_blank")}
              onMouseEnter={() => handleCursor(true)}
              onMouseLeave={() => handleCursor(false)}
            >
              <Image
                src={project.image}
                width={768}
                height={768}
                alt={project.alt}
              />
            </div>

            <div className={styles.description}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={`tags ${styles.tech}`}>
                {project.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Cursor */}
      <ProjectCursor isActive={isActive} />
    </section>
  );
};

export default Projects;
