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
        {/* Testronic */}
        <article className={styles.job}>
          <div className={styles.title}>
            <div className={styles.timeline}>
              <div className={styles.mainDot}></div>
              <div className={styles.line}></div>
            </div>
            <h3>Testronic</h3>
          </div>

          {/* Position 1 */}
          <div className={styles.position}>
            <div className={styles.timeline}>
              <div className={styles.dateBox}>
                <div className={styles.date}>
                  <p className={styles.year}>2024</p>
                  <p>Present</p>
                </div>
                <div className={styles.smallDot}></div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.smallLine}></div>
            </div>
            <div className={styles.details}>
              <h4>Quality Assurance Technician</h4>
              <div className={`tags ${styles.tags}`}>
                <p>Cross-Team Collaboration</p>
                <p>JIRA & TestRail</p>
                <p>Bug Identification</p>
                <p>Task Prioritization</p>
              </div>
            </div>
          </div>
        </article>

        {/* Welcome Airport Services */}
        <article className={styles.job}>
          <div className={styles.title}>
            <div className={styles.timeline}>
              <div className={styles.mainDot}></div>
              <div className={styles.line}></div>
            </div>
            <h3>Welcome Airport Services</h3>
          </div>

          {/* Position 1 */}
          <div className={styles.position}>
            <div className={styles.timeline}>
              <div className={styles.dateBox}>
                <div className={styles.date}>
                  <p className={styles.year}>2023</p>
                  <p>Jun - Aug</p>
                </div>
                <div className={styles.smallDot}></div>
              </div>
              <div className={styles.line}></div>
            </div>
            <div className={styles.details}>
              <h4>Junior IT Specialist</h4>
              <div className={`tags ${styles.tags}`}>
                <p>Project Management</p>
                <p>Network Monitoring</p>
                <p>Tech Support</p>
                <p>System Configuration</p>
              </div>
            </div>
          </div>

          {/* Position 2 */}
          <div className={styles.position}>
            <div className={styles.timeline}>
              <div className={styles.dateBox}>
                <div className={styles.date}>
                  <p className={styles.year}>2022</p>
                  <p>Oct - Nov</p>
                </div>
                <div className={styles.smallDot}></div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.smallLine}></div>
            </div>
            <div className={styles.details}>
              <h4>Junior IT Specialist Intern</h4>
              <div className={`tags ${styles.tags}`}>
                <p>Network Monitoring</p>
                <p>Tech Support</p>
                <p>System Configuration</p>
              </div>
            </div>
          </div>
        </article>

        {/* Płatek */}
        <article className={styles.job}>
          <div className={styles.title}>
            <div className={styles.timeline}>
              <div className={styles.mainDot}></div>
              <div className={styles.line}></div>
            </div>
            <h3>Płatek</h3>
          </div>

          {/* Position 1 */}
          <div className={styles.position}>
            <div className={styles.timeline}>
              <div className={styles.dateBox}>
                <div className={styles.date}>
                  <p className={styles.year}>2021</p>
                  <p>Nov - Dec</p>
                </div>
                <div className={styles.smallDot}></div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.smallLine}></div>
            </div>
            <div className={styles.details}>
              <h4>Computer Technician Intern</h4>
              <div className={`tags ${styles.tags}`}>
                <p>Hardware Troubleshooting</p>
                <p>Software Installation</p>
                <p>Performance Testing</p>
              </div>
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
          <div className={styles.title}>
            <div className={styles.timeline}>
              <div className={styles.dateBox}>
                <div className={styles.date}>
                  <p className={styles.year}>2024</p>
                  <p>Present</p>
                </div>
                <div className={styles.smallDot}></div>
              </div>
              <div className={styles.line}></div>
            </div>
            <h4>University of Economics and Human Sciences in Warsaw</h4>
          </div>

          {/* Bachelor's Degree */}
          <div className={styles.degree}>
            <div className={styles.timeline}>
              <div className={styles.line}></div>
              <div className={styles.smallLine}></div>
            </div>
            <p>Bachelor&apos;s in Business Management</p>
          </div>
        </article>

        {/* T9L Heroes of Narvik */}
        <article className={styles.school}>
          <div className={styles.title}>
            <div className={styles.timeline}>
              <div className={styles.dateBox}>
                <div className={styles.date}>
                  <p className={styles.year}>2024</p>
                  <p className={styles.year}>2019</p>
                </div>
                <div className={styles.smallDot}></div>
              </div>
              <div className={styles.line}></div>
            </div>
            <h4>Technical College T9L Heroes of Narvik</h4>
          </div>

          {/* High School */}
          <div className={styles.degree}>
            <div className={styles.timeline}>
              <div className={styles.line}></div>
              <div className={styles.smallLine}></div>
            </div>
            <p>IT Technician</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
