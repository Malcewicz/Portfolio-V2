import styles from "@/app/_styles/hero.module.css";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
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
      </div>

      <div className={styles.background}>
        <div className={styles.circle_top_right}></div>
        <div className={styles.circle_btm_left}></div>
      </div>
    </header>
  );
};

export default Hero;
