import styles from "./Projects.module.css";
import classMateAppImg from "../../assets/ClassMate-App.png";
import mayRigAppImg from "../../assets/mayRig.png";
import modernTodoAppImg from "../../assets/Modern-Todo-App.png";
import technoTalkAppImg from "../../assets/Techno-Talk-Pvt-Ltd.png";
import weatherAppImg from "../../assets/Weather-App.png";
import weCodeTogetherAppImg from "../../assets/weCodeTogether-App.png";
import { useRef, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export const Projects = () => {
  //temporary reflect to users for project link
  const [isProjectActive, setIsProjectActive] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const imgRef = useRef();
  const handleRedirect = (e) => {
    console.log(imgRef.current.children[0].children[0]);
    Array.from(imgRef.current.children).forEach((child, idx) => {
      if (imgRef.current.children[idx].children[0] === e.target) {
        setIsProjectActive((prev) =>
          prev.map((item, i) => (i === idx ? false : item)),
        );
      }
    });

    setTimeout(() => {
      setIsProjectActive((prev) => prev.map(() => true));
    }, 2500);
  };

  //tracking current visited path(url/route) with useLocation()-method
  const location = useLocation();
  const parentPageActive = location.pathname === "/projects";

  // redirecting to the relevent project page(classmate, dolists, lets-forecast, etc) on clicking learn more button
  const navigate = useNavigate();
  const handleNavigate = (navVal) => {
    navigate(`/projects/${navVal}`);
  };

  return (
    <>
      {parentPageActive ? (
        <main className={styles["main-section-one"]}>
          <div className={styles["main-heading"]}>
            <h1>My All Projects' lists :</h1>
          </div>
          <section ref={imgRef} className={styles["main-section-two"]}>
            {/* <div className={`${styles["main-section-child"]}`}> */}
            <article
              className={` ${!isProjectActive[0] ? styles["project-overviewed"] : styles["normal-viewed"]}`}
            >
              <img
                src={classMateAppImg}
                draggable={false}
                onDoubleClick={handleRedirect}
              />
              <div>
                <span>classMate</span>
                <button
                  onClick={() => {
                    handleNavigate("class-mate");
                  }}
                >
                  learn more
                </button>
              </div>
            </article>
            <article
              className={` ${!isProjectActive[1] ? styles["project-overviewed"] : styles["normal-viewed"]}`}
            >
              <img
                src={mayRigAppImg}
                draggable={false}
                onDoubleClick={handleRedirect}
              />
              <div>
                <span>mayRig</span>
                <button
                  onClick={() => {
                    handleNavigate("may-rig");
                  }}
                >
                  learn more
                </button>
              </div>
            </article>
            <article
              className={` ${!isProjectActive[2] ? styles["project-overviewed"] : styles["normal-viewed"]}`}
            >
              <img
                src={weatherAppImg}
                draggable={false}
                onDoubleClick={handleRedirect}
              />
              <div>
                <span>letsForecast</span>
                <button
                  onClick={() => {
                    handleNavigate("lets-forecast");
                  }}
                >
                  learn more
                </button>
              </div>
            </article>
            <article
              className={` ${!isProjectActive[3] ? styles["project-overviewed"] : styles["normal-viewed"]}`}
            >
              <img
                src={weCodeTogetherAppImg}
                draggable={false}
                onDoubleClick={handleRedirect}
              />
              <div>
                <span>weCode Together</span>
                <button
                  onClick={() => {
                    handleNavigate("we-code-together");
                  }}
                >
                  learn more
                </button>
              </div>
            </article>
            <article
              className={` ${!isProjectActive[4] ? styles["project-overviewed"] : styles["normal-viewed"]}`}
            >
              <img
                src={technoTalkAppImg}
                draggable={false}
                onDoubleClick={handleRedirect}
              />
              <div>
                <span>techTalk</span>
                <button
                  onClick={() => {
                    handleNavigate("techno-talk");
                  }}
                >
                  learn more
                </button>
              </div>
            </article>
            <article
              className={` ${!isProjectActive[5] ? styles["project-overviewed"] : styles["normal-viewed"]}`}
            >
              <img
                src={modernTodoAppImg}
                draggable={false}
                onDoubleClick={handleRedirect}
              />
              <div>
                <span>doLists</span>
                <button
                  onClick={() => {
                    handleNavigate("do-lists");
                  }}
                >
                  learn more
                </button>
              </div>
            </article>
          </section>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
};
