"use client";

import { gsap, useGSAP } from "@/app/_utils/gsap";
import { useRef, useEffect } from "react";
import styles from "@/app/_styles/ui/project-cursor.module.css";

const ProjectCursor = ({ isActive }: { isActive: boolean }) => {
  const cursor = useRef<HTMLDivElement | any>();
  const cursorLabel = useRef<HTMLDivElement | any>();

  useGSAP(
    () => {
      const MoveCursorX = gsap.quickTo(cursor.current, "left", {
        duration: 0.4,
        ease: "power2",
      });
      const MoveCursorY = gsap.quickTo(cursor.current, "top", {
        duration: 0.4,
        ease: "power2",
      });

      const MoveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
        duration: 0.35,
        ease: "power2",
      });
      const MoveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
        duration: 0.35,
        ease: "power2",
      });

      document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        MoveCursorX(clientX);
        MoveCursorY(clientY);
        MoveCursorLabelX(clientX);
        MoveCursorLabelY(clientY);
      });

      return () => {
        document.removeEventListener("mousemove", () => {});
      };
    },
    { scope: cursor }
  );

  useEffect(() => {
    if (isActive) {
      gsap.to(cursor.current, {
        opacity: 1,
        scale: 1,
        xPercent: -50,
        yPercent: -50,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(cursorLabel.current, {
        opacity: 1,
        scale: 1,
        xPercent: -50,
        yPercent: -50,
        duration: 0.2,
        ease: "power2.out",
      });
    } else {
      gsap.to(cursor.current, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "power2.in",
      });
      gsap.to(cursorLabel.current, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [isActive]);

  return (
    <>
      <div className={styles.cursor} ref={cursor}></div>
      <div className={styles.cursorLabel} ref={cursorLabel}>
        View
      </div>
    </>
  );
};

export default ProjectCursor;
