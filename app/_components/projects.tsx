"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectCursor from "./ui/project-cursor";
import styles from "@/app/_styles/projects.module.css";

const projectData = [
  {
    title: "Wakely",
    description:
      "What if an app could seamlessly blend beauty with functionality? Wakely does just that. Designed with Figma and brought to life using Flutter, it offers a sleek, user-friendly experience in both light and dark modes.",
    tags: ["Figma", "Flutter", "Dart"],
    image: "/images/wakely.png",
    alt: "Wakely App",
  },
  {
    title: "Lakeview Apartments",
    description:
      "For LakeView, I crafted a clean, responsive single-page website tailored to my client's needs. Using a Mobile First approach, I ensured a user-friendly experience that has drawn thousands of visitors since its launch.",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    image: "/images/lakeview.png",
    alt: "Lakeview Apartments Website",
    link: "https://www.lakeviewprzewiez.pl/",
  },
  {
    title: "Sushi Project",
    description:
      "Can a website be as delightful as the cuisine it features? This project, built while learning Vite, features swift loading times and playful animations. While the design credits go to Pickolab studio, the coding showcases my technical skills.",
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
            Here are some of my recent projects, showcasing my front-end
            development and UI design skills. These projects reflect my
            commitment to delivering high-quality, user-friendly solutions using
            modern technologies.
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
