"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/app/_utils/gsap";
import Link from "next/link";
import styles from "@/app/_styles/contact.module.css";
import { IconPhone, IconMail } from "@tabler/icons-react";

const Contact = () => {
  const button = useRef<HTMLElement | any>();
  const span = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });
      tl.to(span.current, {
        yPercent: -250,
        duration: 0.2,
        ease: "power2.inOut",
      });
      tl.set(span.current, { yPercent: 250 });
      tl.to(span.current, { yPercent: 0, duration: 0.2 });

      button.current.addEventListener("mouseenter", () => tl.play(0));
      return () => {
        button.current.removeEventListener("mousemove", () => tl.play(0));
      };
    },
    { scope: button }
  );

  return (
    <section id="contact" className={styles.contact}>
      <div className="heading">
        <h2>Get in Touch</h2>
      </div>

      <hr />

      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.subtitle}>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out
            through any of the methods below. I look forward to connecting with
            you!
          </p>
          <div className={styles.phonemail}>
            <Link href="callto:+48733326433">
              <IconPhone size={22} stroke={2} />
              +48 733 326 433
            </Link>
            <Link href="mailto:maciej@bernatowicz.dev">
              <IconMail size={22} stroke={2} />
              maciej@bernatowicz.dev
            </Link>
          </div>
        </div>

        <div className={styles.resume}>
          <p>
            Interested in hiring me or collaborating on a project? <br />
            Feel free to view or download my resume:
          </p>
          <Link
            href="/MB_Resume_pers.pdf"
            type="application/pdf"
            target="_blank"
            rel="noopener noreferrer"
            locale={false}
            title="Open my resume in a new tab"
            className={styles.button}
            ref={button}
          >
            <span ref={span}>Download my Resume</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
