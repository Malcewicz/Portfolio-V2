import styles from "@/app/_styles/experience.module.css";

const Experience = () => {
  return (
    <>
      <WorkExperience />
      <Education />
    </>
  );
};

// Work Experience component
const WorkExperience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="heading">
        <h2>My Experience</h2>
        <div className="wrapper">
          <p className="subtitle">
            With a blend of technical expertise and project management skills,
            my professional journey highlights roles that required
            problem-solving, system optimization, and technical support.
            Here&apos;s a snapshot of my career so far:
          </p>
        </div>
      </div>

      <div className={styles.content}>
        {/* Welcome Airport Services */}
        <article className={styles.job}>
          <div className={styles.lines}>{/* will add lines later */}</div>

          <div className={styles.details}>
            <h3>Welcome Airport Services</h3>

            {/* Position 1 */}
            <div className={styles.position}>
              <h4>Junior IT Specialist</h4>
              <div className="tags" style={{ gap: "14px" }}>
                <p>Project Management</p>
                <p>Network Monitoring</p>
                <p>Tech Support</p>
                <p>System Configuration</p>
              </div>
              <p>
                At an airport, seamless connectivity and operations are as
                crucial as flights themselves. At Welcome Airport Services, I
                played a pivotal role in creating a new workspace for flight
                coordinators and supervisors, ensuring their operations were as
                smooth as a well-executed landing. From ensuring robust network
                connectivity to swiftly resolving technical issues, my
                contributions kept the airport&apos;s technical backbone running
                flawlessly. Optimizing software and hardware systems was just
                part of the journey, where every solved problem meant another
                happy passenger.
              </p>
            </div>

            {/* Position 2 */}
            <div className={styles.position}>
              <h4>Junior IT Specialist Intern</h4>
              <div className="tags" style={{ gap: "14px" }}>
                <p>Network Monitoring</p>
                <p>Tech Support</p>
                <p>System Configuration</p>
              </div>
              <p>
                Diving into the dynamic world of aviation, I tackled technical
                challenges head-on during my internship. I had the opportunity
                to design and implement part of the local computer network,
                ensuring reliable connections crucial for smooth airport
                operations. My knack for problem-solving was put to the test
                daily as I resolved technical issues. This hands-on experience
                not only sharpened my technical skills but also showcased my
                reliability, ultimately leading to a full-time position offer.
              </p>
            </div>
          </div>
        </article>

        {/* Płatek Piotr Płatek */}
        <article className={styles.job}>
          <div className={styles.lines}>{/* will add lines later */}</div>

          <div className={styles.details}>
            <h3>Płatek Piotr Płatek</h3>

            {/* Position 1 */}
            <div className={styles.position}>
              <h4>Computer Technician Intern</h4>
              <div className="tags" style={{ gap: "14px" }}>
                <p>Hardware Troubleshooting</p>
                <p>Software Installation</p>
                <p>Performance Testing</p>
              </div>
              <p>
                In the fast-paced environment of a computer repair shop, I
                became the go-to troubleshooter for a variety of hardware and
                software issues. My internship involved diagnosing and resolving
                problems with laptops and desktop computers, ensuring they ran
                smoothly. I installed and configured new operating systems and
                software, conducted rigorous performance tests, and replaced or
                installed new components as needed. This role gave me a deep
                understanding of hands-on technical work and the importance of
                effective solutions in a repair setting.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

// Education component
const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className="heading">
        <h2>Education</h2>
      </div>

      <div className={styles.content}>
        {/* UEHS in Warsaw */}
        <article className={styles.school}>
          <div className={styles.lines}>{/* will add lines later */}</div>

          <div className={styles.details}>
            <h3>University of Economics and Human Sciences in Warsaw</h3>

            {/* Bachelor's Degree */}
            <div className={styles.degree}>
              <h4>Bachelor&apos;s in Business Management</h4>
              <p>
                I am set to begin my Bachelor&apos;s degree in Business
                Management this October, aiming to further develop my interests
                and skills in this field. This program will provide a strong
                foundation in management principles and practices, preparing me
                for future challenges and opportunities in project management
                and beyond.
              </p>
            </div>
          </div>
        </article>

        {/* T9L Heroes of Narvik */}
        <article className={styles.school}>
          <div className={styles.lines}>{/* will add lines later */}</div>

          <div className={styles.details}>
            <h3>Technical College T9L Heroes of Narvik</h3>

            {/* High School */}
            <div className={styles.degree}>
              <h4>IT Technician</h4>
              <p>
                I attended one of Poland&apos;s top technical colleges, where I
                acquired a comprehensive education in computer science. This
                rigorous program covered a wide range of subjects, including
                software development, network management, and hardware
                maintenance, equipping me with the technical skills and
                knowledge essential for my career.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
