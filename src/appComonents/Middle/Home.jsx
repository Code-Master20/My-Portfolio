import styles from "./Home.module.css";
import developerImg from "../../assets/SahidurImage.jpg";
export const Home = () => {
  return (
    <section className={styles["main-section"]}>
      <div>
        {/* project owner info */}
        <div className={`${styles["owner-info"]}`}>
          <div>
            {/* developer image */}
            <div className={`${styles["dev-img-container"]}`}>
              <div>
                <img src={developerImg} alt="" />
                <h1>Mr. Sahidur Miah</h1>
                <h2>Web Developer(Full-Stack)</h2>
              </div>
            </div>
            {/* developer info */}
            <div className={`${styles["dev-info-container"]}`}>
              <div>
                <h1>hi i'm sahidur miah</h1>
                <h2>WEB DEVELOPER</h2>
                <h3>Building modern and impactful web solutions</h3>
                <h4>About Me :</h4>
                <p>
                  I am a web developer with a passion for creating sleek and
                  modern web applications. I love transforming ideas into
                  reality using the latest tech.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* this current project info */}
        <div className={`${styles["this-info"]}`}>
          <div>This Prpoject's Info</div>
        </div>
        {/* My other projects' info */}
        <div className={`${styles["projects-info"]}`}>
          <div>My Other Projects' Info</div>
        </div>
      </div>
    </section>
  );
};
