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
          },
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
            },
          );
        });
      });
    },
    { scope: contentRef },
  );

  return (
    <section id="values" className={styles.values}>
      <div className="heading">
        <h2>My Values</h2>
        <div className="wrapper">
          <p className="subtitle">
            Understanding work from the perspective of someone doing it, not
            directing it, shaped the values I bring to every role. They
            influence how I approach collaboration and problem solving, and how
            I think about quality.
          </p>
        </div>
      </div>

      <div className={styles.content} ref={contentRef}>
        <div className={styles.value}>
          <h3>Transparent Communication</h3>
          <p>
            I value open communication with both team members and stakeholders.
            Clarity at every stage prevents the types of misalignments that can
            derail projects.
          </p>
          <div className={styles.icon}>
            <CommunicationIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Quality and Attention to Detail </h3>
          <p>
            I hold my work to a high standard and care about getting things
            right. The details others overlook are often the ones that matter
            most.
          </p>
          <div className={styles.icon}>
            <QualityIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Adaptability and Flexibility</h3>
          <p>
            Projects rarely go exactly to plan. I focus on staying clear-headed,
            taking in feedback, and adjusting quickly without losing sight of
            the goal.
          </p>
          <div className={styles.icon}>
            <FlexibilityIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>People-Oriented Approach</h3>
          <p>
            Great results start with great teams. For me that means building
            trust, recognising individual strengths, and making sure everyone
            feels valued.
          </p>
          <div className={styles.icon}>
            <PeopleOrientedIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Continuous Learning</h3>
          <p>
            I actively pursue knowledge through studies and certifications,
            though genuine curiosity has always been my biggest motivator for
            learning.
          </p>
          <div className={styles.icon}>
            <LearningIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Creative Problem Solving</h3>
          <p>
            When the standard solution isn&apos;t the right fit, I look deeper.
            I enjoy finding approaches that are creative, practical, and well
            suited to the problem at hand.
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
