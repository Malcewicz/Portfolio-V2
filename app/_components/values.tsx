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
  return (
    <section id="values" className={styles.values}>
      <div className="heading">
        <h2>My Values</h2>
        <div className="wrapper">
          <p className="subtitle">
            Striving to achieve excellence through a set of core values that
            guide my approach to project management and software development.
            They shape my decision-making process and interactions with clients
            and team members.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.value}>
          <h3>People-Oriented Approach</h3>
          <p>
            Fostering a collaborative and supportive environment where every
            team member feels valued and motivated to contribute their best.
          </p>
          <div className={styles.icon}>
            <PeopleOrientedIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Transparent Communication</h3>
          <p>
            Maintaining openness and clarity through constant interaction with
            team members and stakeholders to ensure everyone is aligned and
            informed.
          </p>
          <div className={styles.icon}>
            <CommunicationIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Quality and Attention to Detail </h3>
          <p>
            Ensuring every aspect of the project is thoroughly reviewed and
            refined to maintain high standards of quality and excellence.{" "}
          </p>
          <div className={styles.icon}>
            <QualityIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Adaptability and Flexibility</h3>
          <p>
            Being prepared to pivot and adjust plans based on feedback and
            changing project requirements, ensuring successful outcomes despite
            unforeseen challenges.
          </p>
          <div className={styles.icon}>
            <FlexibilityIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Continuous Learning</h3>
          <p>
            Commitment to ongoing education and skill development to stay ahead
            in the ever-evolving field of technology and project management.
          </p>
          <div className={styles.icon}>
            <LearningIcon />
          </div>
        </div>

        <div className={styles.value}>
          <h3>Creative Problem Solving</h3>
          <p>
            Embracing creativity and forward-thinking to develop unique and
            effective solutions that meet the needs of clients and stakeholders.
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
