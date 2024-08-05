"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/app/_utils/gsap";
import Link from "next/link";
import styles from "@/app/_styles/ui/navbar.module.css";
import { Logo } from "@/public/icons";
import { IconExternalLink, IconMenuDeep, IconX } from "@tabler/icons-react";
import { scrollToTop } from "@/app/_utils/scroll-to-top";

const Navbar = () => {
  const nav = useRef<HTMLDivElement | any>();
  const hamburger = useRef<HTMLElement | any>();
  const links = useRef<HTMLElement | any>();
  const button = useRef<HTMLElement | any>();
  const span = useRef<HTMLElement | any>();

  // Animate the navbar on mount
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

  // Animate the mobile menu
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    // Hamburger transition
    tl.to(
      hamburger.current.children[0],
      { rotate: 360, display: "none", opacity: 0, duration: 0.3 },
      0
    );
    tl.to(
      hamburger.current.children[1],
      { rotate: 180, display: "inherit", opacity: 1, duration: 0.3 },
      0.1
    );
    // Expand nav
    tl.to(
      nav.current,
      {
        height: "342px",
        duration: 0.3,
      },
      0
    );
    // Show menu
    tl.to(links.current, { display: "flex" }, 0);
    // Stagger menu links
    tl.to(
      links.current.children,
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
      },
      0.3
    );
    tl.reverse();

    // Close the menu when a link is clicked
    const linkArray = Array.from(links.current.children) as HTMLElement[];
    linkArray.forEach((child) =>
      child.addEventListener("click", () => {
        tl.timeScale(2).reverse();
      })
    );

    // Toggle menu on hamburger click
    hamburger.current.addEventListener(
      "click",
      () =>
        tl.reversed() ? tl.timeScale(1).play(0) : tl.timeScale(2).reverse() // Plays the animation at 2x speed when closing
    );
    return () => {
      hamburger.current.removeEventListener("click", () =>
        tl.reversed() ? tl.timeScale(1).play(0) : tl.timeScale(2).reverse()
      );
      linkArray.forEach((child) =>
        child.removeEventListener("click", () => tl.timeScale(2).reverse())
      );
    };
  });

  // Animate the resume button on hover
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
      <div className={styles.wrapper}>
        {/* logo */}
        <div className={styles.logo} onClick={scrollToTop}>
          <Logo />
        </div>

        {/* Mobile button */}
        <div className={styles.hamburger} ref={hamburger}>
          <IconMenuDeep size={34} stroke={2} />
          <IconX size={34} stroke={2} />
        </div>
      </div>

      {/* links menu */}
      <div className={styles.links} ref={links}>
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
