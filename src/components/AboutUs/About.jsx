import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.Container} id="about">
      <h1 className={styles.mainheading}>🌱 About TechySprouts</h1>
      <div className={styles.about}>
        <p className={styles.aboutlines}>
          At TechySprouts, we believe every child carries the seed of
          brilliance. It only needs the right soil to grow. In a world powered
          by technology, coding has become the new language of success. While
          most kids are kept busy with screens that consume their time, we
          empower young minds to create with them.
        </p>
        <p className={styles.aboutlines}>
          Our journey began with a simple but powerful question:
        </p>
        <p className={styles.boldline}>
          “What if every child had the tools and confidence to shape the future
          instead of just following it?”
        </p>
        <p className={styles.aboutlines}>
          That question gave birth to TechySprouts — an online coding academy
          where innovation takes root early.
        </p>
      </div>
      <div className={styles.ilm}>
        <h2 className={styles.heading}>
          A Project of{" "}
          <a className={styles.link} href="https://www.ilmonlineacademy.com/">
            Ilm Online Academy
          </a>
        </h2>

        <p className={styles.ilmlines}>
          TechySprouts is proudly a project of{" "}
          <a
            className={styles.linkSmall}
            href="https://www.ilmonlineacademy.com/"
          >
            Ilm Online Academy
          </a>{" "}
          , an institution that has been serving overseas Pakistanis for more
          than 5 years. Ilm Online Academy has earned parents’ trust globally by
          providing high-level tuitions in O Levels, A Levels, and beyond,
          helping hundreds of students excel academically.
        </p>
        <p className={styles.ilmlines}>
          With the same commitment to quality and personalized attention,
          TechySprouts extends this legacy into the world of coding — shaping
          not just strong students, but future-ready innovators.
        </p>
      </div>
      <div className={styles.listContainer}>
        <h2 className={styles.heading}>What Makes Us Different?</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h3 className={styles.secondaryHeading}>Experienced Educators</h3>
            <p>
              Our team is made up of Computer Science and Software Engineering
              professionals with years of teaching experience — both locally and
              overseas. We know what it takes to bring out the best in kids
              because we’ve done it across classrooms and continents.
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.secondaryHeading}>
              Confidence through Creation
            </h3>
            <p>
              We don’t just teach coding; we teach kids to think, solve
              problems, and express ideas boldly. Every project, every class is
              designed to build self-belief along with technical skills.
            </p>
          </li>
          <li className={styles.listItem}>
            <h3 className={styles.secondaryHeading}>
              Friendly & Nurturing, Yet Premium
            </h3>
            <p>
              We keep our classes small and interactive, giving each child the
              personal attention they deserve. It’s a safe, encouraging
              environment — but also a premium experience, preparing kids to
              stand out in a competitive world.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.missionContainer}>
        <h2 className={styles.headingmission}>🌍 Our Mission</h2>
        <p className={styles.mission}>
          To transform today’s curious kids into tomorrow’s confident innovators
          — leaders who will not only keep up with the future but build it.
        </p>
        <p className={styles.endline}>
          At TechySprouts, your child won’t just learn to code. They’ll learn to
          create, innovate, and believe in themselves.
        </p>
      </div>
    </div>
  );
};
export default About;
