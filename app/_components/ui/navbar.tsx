"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/app/_utils/gsap";
import Link from "next/link";
import styles from "@/app/_styles/ui/navbar.module.css";
import { Logo } from "@/public/icons";
import { IconExternalLink } from "@tabler/icons-react";
import { scrollToTop } from "@/app/_utils/scroll-to-top";

const Navbar = () => {
  const nav = useRef<HTMLDivElement | any>();
  const button = useRef<HTMLElement | any>();
  const span = useRef<HTMLElement | any>();

  // Temporarily disable navbar on mobile
  const window = globalThis.window;
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 810;
  if (isMobile) {
    return null;
  }

  useGSAP(
    () => {
      gsap.set(nav.current, { y: -100, opacity: 0 });
      gsap.to(nav.current, {
        duration: 0.3,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        delay: 0.3,
      });
    },
    { scope: nav }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });
      tl.to(span.current, {
        yPercent: -125,
        duration: 0.15,
        ease: "power2.inOut",
      });
      tl.set(span.current, { yPercent: 125 });
      tl.to(span.current, { yPercent: 0, duration: 0.15 });

      button.current.addEventListener("mouseenter", () => tl.play(0));
      return () => {
        button.current.removeEventListener("mousemove", () => tl.play(0));
      };
    },
    { scope: button }
  );

  return (
    <nav className={styles.navbar} ref={nav}>
      {/* logo */}
      <div className={styles.logo} onClick={scrollToTop}>
        <Logo />
      </div>

      {/* links */}
      <div className={styles.links}>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#contact">Contact</Link>
        <Link
          href="/MB_Resume_og_pers.pdf"
          type="application/pdf"
          target="_blank"
          locale={false}
          title="Open my resume in a new tab"
          rel="noopener noreferrer"
          className={styles.button}
          ref={button}
        >
          <span ref={span}>
            Resume
            <IconExternalLink size={20} stroke={2.5} />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
