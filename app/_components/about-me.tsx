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
            ">" // Start after previous animation finishes
          )
            .to(
              [leftP, rightContent],
              {
                height: 0,
                marginTop: 0,
                duration: 0.8,
                ease: "none",
              },
              "<" // Animate height at the same time as opacity but slower
            )
            .to(
              skill,
              {
                paddingBottom: "11px",
                duration: 0.8,
                ease: "none",
              },
              "<" // Animate margin at the same time as content collapse
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
            }
          );
        });
      });
    },
    { scope: contentRef }
  );

  return (
    <section id="about" className={styles.about}>
      <div className="heading">
        <h2>About Me</h2>
        <div className="wrapper">
          <p className="subtitle">
            I&apos;m a technology enthusiast with a strong background in
            software development and a growing enthusiasm for project
            management. Based in Warsaw, I excel at transforming complex
            challenges into seamless solutions.
          </p>
        </div>
      </div>
      <div className={styles.content} ref={contentRef}>
        <div className={styles.skill}>
          <div className={styles.left}>
            <h3>Software Development</h3>
            <p>
              With a strong foundation in front-end development and UI design,
              my focus is on building responsive, visually appealing, and
              user-friendly websites by leveraging modern technologies,
              frameworks and design principles.
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
              I believe that a project is only as good as the team behind it,
              that&apos;s why I take a people-oriented approach, emphasizing
              cooperation and clear communication. Balancing technical knowledge
              with management skills, I&apos;m able to lead teams effectively to
              drive projects to successful completion.
            </p>
          </div>
          <div className={styles.right}>
            <div>
              <h4>Methodologies</h4>
              <p>Waterfall, Agile, Scrum, Kanban</p>
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
              I am proficient in managing and optimizing technical environments,
              ensuring seamless operations and efficient workflows. My skills in
              system administration and software management help maintain high
              reliability in various settings.
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
              To back my skills with formal recognition and continuous learning,
              I have earned several certifications that validate my knowledge in
              various domains. These certifications help me stay updated with
              industry standards and best practices.
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
              Outside of my professional life, I have a passion for exploring
              new technologies, photography, design, and aviation. These
              interests not only fuel my creativity but also enhance my approach
              to problem-solving and innovation.
            </p>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
