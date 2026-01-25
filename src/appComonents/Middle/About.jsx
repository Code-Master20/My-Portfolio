import styles from "./About.module.css";
import developerImg from "../../assets/SahidurImage.jpg";

export const About = () => {
  return (
    <section className={`${styles["main-section-one"]}`}>
      <section className={`${styles["main-section-two"]}`}>
        {/* developer introduction including image */}
        <div className={`${styles["dev-intro"]}`}>
          <div>
            <div className={`${styles["dev-img-container"]}`}>
              <h1>About Me :</h1>
              <img draggable={false} src={developerImg} alt="" />
            </div>
            <div className={`${styles["dev-info-container"]}`}>
              <h1>Sahidur Miah</h1>
              <h2>Full-Stack(MERN) Developer</h2>
              <p>
                I'm a passionate web developer with a strong background in both
                front-end and back-end technologies. I love turning ideas into
                reality through code and am always eager to learn new things.
              </p>
            </div>
          </div>
        </div>
        {/* developer journeyed learning web development */}
        <div className={`${styles["dev-journey"]}`}>
          <div>
            <h1>My Journey</h1>
            <p>
              I began my coding journey after completing my 12th grade in the
              science stream. Driven by curiosity and passion for technology, I
              started learning web development on my own, building projects, and
              exploring modern tools and frameworks.Currently, I am pursuing a
              degree in <span>BCA</span> , which is expected to be completed by
              2028.
            </p>
            <p>
              I have experience working with popular technologies like{" "}
              <span>
                HTML5, CSS3, TailwindCSS, ReactJS, NodeJS, ExpressJS,
                JavaScript, Mongodb, Mongoose, Bootstrap
              </span>
              , and more. I enjoy tackling challenging problems and building
              efficient, scalable solutions.
            </p>
          </div>
        </div>
        {/* developer acquired skills */}
        <div className={`${styles["dev-skills"]}`}>
          <div>
            <h1>Skills</h1>
            <p>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>TailwindCSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>ReactJs</span>
              <span>NodeJs</span>
              <span>ExpressJs</span>
              <span>Mongodb</span>
              <span>Mongoose</span>
              <span>Git</span>
              <span>etc.</span>
            </p>
          </div>
        </div>
        {/* developer acquired experience in the field */}
        <div className={`${styles["dev-experience"]}`}>
          <div>
            <h1>Experience</h1>
            <p>
              Over the years, I've worked on a range of web projects, from small
              fun-play websites to full-fledged web applications. I'm always
              looking for new opportunities to grow and make an impact.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
