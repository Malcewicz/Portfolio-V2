import styles from "@/app/_styles/hero.module.css";

const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <header className={styles.header}>
        <h3 className={styles.subheading}>Hi, I&apos;m Maciej</h3>
        <h1 className={styles.heading}>
          A Technical Mind with a Passion for <span>Project Management</span>
        </h1>
        <p className={styles.description}>
          I&apos;m a QA professional based in Warsaw, with a strong grasp of how
          software is built, tested, and delivered. Currently studying
          Enterprise Management, I&apos;m actively working toward a career in
          Project Management, backed by hands-on technical experience.
        </p>
      </header>
    </div>
  );
};

export default Hero;
