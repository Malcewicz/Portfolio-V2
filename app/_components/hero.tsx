import styles from "@/app/_styles/hero.module.css";

const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <header className={styles.header}>
        <h3 className={styles.subheading}>Hello! I&apos;m Maciej</h3>
        <h1 className={styles.heading}>
          Transforming Ideas into Reality through{" "}
          <span>Technology and Cooperation</span>
        </h1>
        <p className={styles.description}>
          With a foundation in software development and a passion for project
          management, I bring a unique blend of technical expertise and
          strategic oversight to every project, turning complex challenges into
          seamless solutions.
        </p>
      </header>
    </div>
  );
};

export default Hero;
