import styles from "./Home.module.css";
import developerImg from "../../assets/SahidurImage.jpg";
import classMateAppImg from "../../assets/ClassMate-App.png";
import mayRigAppImg from "../../assets/mayRig.png";
import modernTodoAppImg from "../../assets/Modern-Todo-App.png";
import technoTalkAppImg from "../../assets/Techno-Talk-Pvt-Ltd.png";
import weatherAppImg from "../../assets/Weather-App.png";
import weCodeTogetherAppImg from "../../assets/weCodeTogether-App.png";

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
          <div>
            <div>
              <h1>About This Project :</h1>
              <p>
                This is a fully responsive personal portfolio website built
                using HTML, CSS, TailwindCSS, JavaScript, and ReactJS. The
                design adapts to all screen sizes, making it device-width and
                height independent. The site showcases my skills, projects, and
                experience in a clean and modern layout.
              </p>
              <p>
                I also added a contact form where users can send me a message.
                For this, I used Node.js, Express, MongoDB, and Mongoose to
                store the messages, along with a free API integration for
                additional projects merged with this current project.
              </p>
            </div>
          </div>
        </div>
        {/* My other projects' info */}
        <div className={`${styles["projects-info"]}`}>
          <div>
            <img src={classMateAppImg} alt="" />
            <img src={mayRigAppImg} alt="" />
            <img src={weatherAppImg} alt="" />
            <img src={weCodeTogetherAppImg} alt="" />
            <img src={technoTalkAppImg} alt="" />
            <img src={modernTodoAppImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
