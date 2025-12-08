"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/app/_utils/gsap";
import styles from "@/app/_styles/values.module.css";
import {
  PeopleOrientedIcon,
  CommunicationIcon,
  QualityIcon,
  FlexibilityIcon,
  LearningIcon,
  ProblemSolvingIcon,
} from "@/public/icons";

const Values = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Animate value cards on scroll
  useGSAP(
    () => {
      const matchMedia = gsap.matchMedia();
      const values = contentRef.current?.querySelectorAll(`.${styles.value}`);

      if (!values || values.length === 0) return;

      // Desktop: stagger animation
      matchMedia.add("(min-width: 811px)", () => {
        gsap.fromTo(
          values,
          {
            opacity: 0,
            x: 40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.25,
            ease: "power1.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Mobile: fade-in each card individually when it enters viewport
      matchMedia.add("(max-width: 810px)", () => {
        values.forEach((value) => {
          gsap.fromTo(
            value,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power1.out",
              scrollTrigger: {
                trigger: value,
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
    <section id="values" className={styles.values}>
      <div className="heading">
        <h2>My Values</h2>
        <div className="wrapper">
          <p className="subtitle">
            Striving to achieve excellence through a set of core values that
            guide my approach to project management and software development.
            They shape my decision-making process and interactions with clients
            and team members.
          </p>
        </div>
      </div>

      <div className={styles.content} ref={contentRef}>
        <div className={styles.value}>
          <h3>People-Oriented Approach</h3>
          <p>
            Fostering a collaborative and supportive environment where every
            team member feels valued and motivated to contribute their best.
          </p>
          <div className={styles.icon}>
            <PeopleOrientedIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Transparent Communication</h3>
          <p>
            Maintaining openness and clarity through constant interaction with
            team members and stakeholders to ensure everyone is aligned and
            informed.
          </p>
          <div className={styles.icon}>
            <CommunicationIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Quality and Attention to Detail </h3>
          <p>
            Ensuring every aspect of the project is thoroughly reviewed and
            refined to maintain high standards of quality and excellence.{" "}
          </p>
          <div className={styles.icon}>
            <QualityIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Adaptability and Flexibility</h3>
          <p>
            Being prepared to pivot and adjust plans based on feedback and
            changing project requirements, ensuring successful outcomes despite
            unforeseen challenges.
          </p>
          <div className={styles.icon}>
            <FlexibilityIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Continuous Learning</h3>
          <p>
            Commitment to ongoing education and skill development to stay ahead
            in the ever-evolving field of technology and project management.
          </p>
          <div className={styles.icon}>
            <LearningIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Creative Problem Solving</h3>
          <p>
            Embracing creativity and forward-thinking to develop unique and
            effective solutions that meet the needs of clients and stakeholders.
          </p>
          <div className={styles.icon}>
            <ProblemSolvingIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
