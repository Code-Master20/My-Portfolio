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
              <img src={developerImg} alt="" />
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
          <div>How Developer Journeyed?</div>
        </div>
        {/* developer acquired skills */}
        <div className={`${styles["dev-skills"]}`}>
          <div>Developer acquired skills</div>
        </div>
        {/* developer acquired experience in the field */}
        <div className={`${styles["dev-experience"]}`}>
          <div>Developer acquied experience in fields</div>
        </div>
      </section>
    </section>
  );
};
