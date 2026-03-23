"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/app/_utils/gsap";
import styles from "@/app/_styles/about-me.module.css";

const AboutMe = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();
      const skills = contentRef.current?.querySelectorAll(`.${styles.skill}`);
      // Compute totalHeight safely and fall back to a default if ref is not ready
      const totalHeight = contentRef.current
        ? contentRef.current.offsetHeight * 0.6
        : 1100;

      if (!skills || skills.length === 0) return;

      // Desktop: pin and stack skills
      matchMedia.add("(min-width: 811px)", () => {
        // Create a master timeline that pins the container
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 135px",
            end: () => `+=${totalHeight}`,
            pin: true,
            scrub: 1,
          },
        });

        //
        skills.forEach((skill, index) => {
          // Skip the last skill so it stays expanded
          if (index === skills.length - 1) return;

          const leftContent = skill.querySelector(`.${styles.left}`);
          const rightContent = skill.querySelector(`.${styles.right}`);
          const leftP = leftContent?.querySelector("p");

          // Collapse each skill sequentially
          tl.to(
            [leftP, rightContent],
            {
              opacity: 0,
              duration: 0.38,
              ease: "none",
            },
            ">", // Start after previous animation finishes
          )
            .to(
              [leftP, rightContent],
              {
                height: 0,
                marginTop: 0,
                duration: 0.8,
                ease: "none",
              },
              "<", // Animate height at the same time as opacity but slower
            )
            .to(
              skill,
              {
                paddingBottom: "11px",
                duration: 0.8,
                ease: "none",
              },
              "<", // Animate margin at the same time as content collapse
            );
        });
      });

      // Mobile: fade-in each skill individually when it enters viewport
      matchMedia.add("(max-width: 810px)", () => {
        skills.forEach((skill) => {
          gsap.fromTo(
            skill,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: skill,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      });
    },
    { scope: contentRef },
  );

  return (
    <section id="about" className={styles.about}>
      <div className="heading">
        <h2>About Me</h2>
        <div className="wrapper">
          <p className="subtitle">
            Technology has always fascinated me. Working in IT and QA put me
            right in the middle of the software lifecycle and, over time, made
            me just as interested in the teams and processes behind it as in the
            code itself.
          </p>
        </div>
      </div>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Software Development</h3>
            <p>
              My focus in software development is on building responsive,
              visually appealing, and user-friendly interfaces. I enjoy working
              with modern front-end technologies and have developed a solid
              grasp of UI design principles through personal projects.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <h4>Languages</h4>
              <p>HTML, CSS, TypeScript, JavaScript, Git, Dart, SQL, Python</p>
            </div>
            <div>
              <h4>Frameworks</h4>
              <p>Next.js, React, Flutter</p>
            </div>
          </div>
        </div>

        <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Project Management</h3>
            <p>
              I believe a good PM earns trust by truly understanding the project
              - the work, the people involved, and the bigger picture.
              That&apos;s exactly the understanding I&apos;m working toward
              through a ground-up perspective from a QA background and
              Enterprise Management studies.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <h4>Methodologies</h4>
              <p>Waterfall, Agile, Kanban</p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>Jira, ClickUp, Office 365, Google Workspace, Excel, Github</p>
            </div>
          </div>
        </div>

        <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Technical Proficiency</h3>
            <p>
              I&apos;m comfortable managing and maintaining technical
              environments - from Windows Server administration to software
              deployment and system configuration. I focus on keeping things
              reliable, organised, and running smoothly.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <h4>Software</h4>
              <p>Windows Server, Google Analytics, Firebase, Github</p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>
                Office 365, Google Workspace, Excel, Figma, Active Directory
              </p>
            </div>
          </div>
        </div>

        <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Certifications</h3>
            <p>
              I pursue certifications to make sure my hands-on experience is
              backed by solid foundations. They keep my knowledge current, give
              me a structured way to keep growing, and help me stay aligned with
              where the industry is heading.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <h4>Foundations of Project Management</h4>
              <p>Google</p>
            </div>
            <div>
              <h4>MTA Windows Server Administration</h4>
              <p>Microsoft</p>
            </div>
          </div>
        </div>

        <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Beyond Work</h3>
            <p>
              Outside of work, I find myself drawn to new technologies,
              photography, UI design, and aviation - a mix that keeps me curious
              and looking at things from unexpected angles.
            </p>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
