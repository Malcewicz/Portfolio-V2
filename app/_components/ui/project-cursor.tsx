"use client";

import { gsap, useGSAP } from "@/app/_utils/gsap";
import { useRef, useEffect } from "react";
import styles from "@/app/_styles/ui/project-cursor.module.css";

const ProjectCursor = ({ isActive }: { isActive: boolean }) => {
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!cursor.current || !cursorLabel.current) return;

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

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        MoveCursorX(clientX);
        MoveCursorY(clientY);
        MoveCursorLabelX(clientX);
        MoveCursorLabelY(clientY);
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: cursor }
  );

  useEffect(() => {
    if (!cursor.current || !cursorLabel.current) return;

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
  }, [isActive, cursor, cursorLabel]);

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
