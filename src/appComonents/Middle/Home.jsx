import styles from "./Home.module.css";
import developerImg from "../../assets/SahidurImage.jpg";
import classMateAppImg from "../../assets/ClassMate-App.png";
import mayRigAppImg from "../../assets/mayRig.png";
import modernTodoAppImg from "../../assets/Modern-Todo-App.png";
import technoTalkAppImg from "../../assets/Techno-Talk-Pvt-Ltd.png";
import weatherAppImg from "../../assets/Weather-App.png";
import weCodeTogetherAppImg from "../../assets/weCodeTogether-App.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  //setting discrete style on identified image
  const [active, setActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const imgRef = useRef();
  const imgIdentify = (e) => {
    setActive((prev) => prev.map(() => false)); //set all array items to false
    const imgs = imgRef.current.children;
    Array.from(imgs).forEach((img, indx) => {
      if (e.target === img) {
        setActive((prev) =>
          prev.map((itm, idx) => {
            if (idx === indx) return (itm = true);
          }),
        );
      }
    });
  };

  const [has_blur, set_has_blur] = useState(true);
  // const [runOneTime, setRunOne] = useState(false);
  let timerId = null;
  const has_blur_functionality = () => {
    set_has_blur(false);
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      set_has_blur(true);
      setActive((prev) => prev.map(() => false));
    }, 2000);
  };

  //swipe navigation determination below
  const navigate = useNavigate();
  const startX = useRef(0);
  const startY = useRef(0);
  const threshHold = 50;

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
  };

  const handlePointerUp = (e) => {
    const diffX = e.clientX - startX.current;
    const diffY = e.clientY - startY.current;

    if (Math.abs(diffX) > threshHold && Math.abs(diffX) > Math.abs(diffY)) {
      diffX > 0 ? navigate("/contact") : navigate("/about");
    }
  };
  return (
    <main
      className={styles["main-section-one"]}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <section className={styles["main-section-two"]}>
        {/* project owner info */}
        <article className={`${styles["owner-info"]}`}>
          {/* developer image */}
          <div className={`${styles["dev-img-container"]}`}>
            <img draggable={false} src={developerImg} alt="" />
            <p>Mr. Sahidur Miah</p>
            <p>Web Developer(Full-Stack)</p>
          </div>
          {/* developer info */}
          <div className={`${styles["dev-info-container"]}`}>
            <h1>hi i'm sahidur miah</h1>
            <h2>WEB DEVELOPER</h2>
            <h3>Building modern and impactful web solutions</h3>
            <h4>About Me :</h4>
            <p>
              I am a web developer with a passion for creating sleek and modern
              web applications. I love transforming ideas into reality using the
              latest tech.
            </p>
          </div>
        </article>
        {/* this current project info */}
        <article className={`${styles["this-info"]}`}>
          <div>
            <h1>About This Project :</h1>
            <p>
              This is a fully responsive personal portfolio website built using
              HTML, CSS, TailwindCSS, JavaScript, and ReactJS. The design adapts
              to all screen sizes, making it device-width and height
              independent. The site showcases my skills, projects, and
              experience in a clean and modern layout.
            </p>
            <p>
              I also added a contact form where users can send me a message. For
              this, I used Node.js, Express, MongoDB, and Mongoose to store the
              messages, along with a free API integration for additional
              projects merged with this current project.
            </p>
          </div>
        </article>
        {/* My other projects' info */}
        <article className={`${styles["projects-info"]}`}>
          <div ref={imgRef} onClick={imgIdentify}>
            <img
              draggable={false}
              onClick={has_blur_functionality}
              src={classMateAppImg}
              alt=""
              className={`${active[0] ? styles["identified"] : styles["firstChild"]} ${!active[0] && !has_blur ? styles["has-blured"] : ""}`}
            />
            <img
              draggable={false}
              onClick={has_blur_functionality}
              src={mayRigAppImg}
              alt=""
              className={`${active[1] ? styles["identified"] : styles["secondChild"]} ${!active[1] && !has_blur ? styles["has-blured"] : ""}`}
            />
            <img
              draggable={false}
              onClick={has_blur_functionality}
              src={weatherAppImg}
              alt=""
              className={`${active[2] ? styles["identified"] : styles["thirdChild"]} ${!active[2] && !has_blur ? styles["has-blured"] : ""}`}
            />
            <img
              draggable={false}
              onClick={has_blur_functionality}
              src={weCodeTogetherAppImg}
              alt=""
              className={`${active[3] ? styles["identified"] : styles["fourthChild"]} ${!active[3] && !has_blur ? styles["has-blured"] : ""}`}
            />
            <img
              draggable={false}
              onClick={has_blur_functionality}
              src={technoTalkAppImg}
              alt=""
              className={`${active[4] ? styles["identified"] : styles["fifthChild"]} ${!active[4] && !has_blur ? styles["has-blured"] : ""}`}
            />
            <img
              draggable={false}
              onClick={has_blur_functionality}
              src={modernTodoAppImg}
              alt=""
              className={`${active[5] ? styles["identified"] : styles["sixthChild"]} ${!active[5] && !has_blur ? styles["has-blured"] : ""}`}
            />
          </div>
        </article>
      </section>
    </main>
  );
};
