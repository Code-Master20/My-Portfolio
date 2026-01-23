import styles from "./Projects.module.css";
import classMateAppImg from "../../assets/ClassMate-App.png";
import mayRigAppImg from "../../assets/mayRig.png";
import modernTodoAppImg from "../../assets/Modern-Todo-App.png";
import technoTalkAppImg from "../../assets/Techno-Talk-Pvt-Ltd.png";
import weatherAppImg from "../../assets/Weather-App.png";
import weCodeTogetherAppImg from "../../assets/weCodeTogether-App.png";
import { useEffect, useState } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

export const Projects = () => {
  //temporary reflect to users for project link
  const [isProjectActive, setIsProjectActive] = useState(true);
  const handleRedirect = () => {
    setIsProjectActive((prev) => !prev);
    setTimeout(() => {
      setIsProjectActive((prev) => !prev);
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
        <main className={styles["main-sspantion-one"]}>
          <div className={styles["main-heading"]}>
            <h1>My All Projects' lists :</h1>
          </div>
          <section className={styles["main-section-two"]}>
            {/* <div className={`${styles["main-section-child"]}`}> */}
            <article>
              <img
                src={classMateAppImg}
                alt=""
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
            <article>
              <img src={mayRigAppImg} alt="" onDoubleClick={handleRedirect} />
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
            <article>
              <img src={weatherAppImg} alt="" onDoubleClick={handleRedirect} />
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
            <article>
              <img
                src={weCodeTogetherAppImg}
                alt=""
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
            <article>
              <img
                src={technoTalkAppImg}
                alt=""
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
            <article>
              <img
                src={modernTodoAppImg}
                alt=""
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
