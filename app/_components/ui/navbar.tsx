"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/app/_utils/gsap";
import Link from "next/link";
import styles from "@/app/_styles/ui/navbar.module.css";
import { Logo } from "@/public/icons";
import { IconExternalLink, IconMenuDeep, IconX } from "@tabler/icons-react";
import { scrollToTop } from "@/app/_utils/scroll-to-top";

const Navbar = () => {
  const nav = useRef<HTMLElement | null>(null);
  const hamburger = useRef<HTMLDivElement | null>(null);
  const links = useRef<HTMLDivElement | null>(null);
  const button = useRef<HTMLAnchorElement | null>(null);
  const span = useRef<HTMLSpanElement | null>(null);

  // Animate the navbar on mount
  useGSAP(
    () => {
      if (!nav.current) return;

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
    if (!hamburger.current || !links.current || !nav.current) return;

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

    const handleLinkClick = () => {
      tl.timeScale(2).reverse();
    };

    const toggleMenu = () => {
      tl.reversed() ? tl.timeScale(1).play(0) : tl.timeScale(2).reverse();
    };

    const currentHamburger = hamburger.current; // Capture current value for cleanup
    const currentLinksChildren = Array.from(
      links.current.children
    ) as HTMLElement[];

    // Close the menu when a link is clicked
    currentLinksChildren.forEach((child) =>
      child.addEventListener("click", handleLinkClick)
    );

    // Toggle menu on hamburger click
    currentHamburger.addEventListener("click", toggleMenu);

    return () => {
      currentHamburger.removeEventListener("click", toggleMenu);
      currentLinksChildren.forEach((child) =>
        child.removeEventListener("click", handleLinkClick)
      );
    };
  }, [nav, hamburger, links]);

  // Animate the resume button on hover
  useGSAP(
    () => {
      if (!button.current || !span.current) return;

      const tl = gsap.timeline({ paused: true });
      tl.to(span.current, {
        yPercent: -125,
        duration: 0.15,
        ease: "power2.inOut",
      });
      tl.set(span.current, { yPercent: 125 });
      tl.to(span.current, { yPercent: 0, duration: 0.15 });

      const currentButton = button.current;
      const playButtonAnimation = () => tl.play(0);

      currentButton.addEventListener("mouseenter", playButtonAnimation);
      return () => {
        currentButton.removeEventListener("mousemove", playButtonAnimation);
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
        <a
          href="/MB_Resume_pers.pdf"
          type="application/pdf"
          target="_blank"
          title="Open my resume in a new tab"
          rel="noopener noreferrer"
          className={styles.button}
          ref={button}
        >
          <span ref={span}>
            Resume
            <IconExternalLink size={20} stroke={2.5} />
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
