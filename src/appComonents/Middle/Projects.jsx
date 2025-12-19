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
        <main className={`${styles["main-section-one"]}`}>
          {isProjectActive === false && (
            <div
              style={{
                position: "absolute",
                zIndex: "99999",
                backgroundColor: "rgba(0,0,0,0)",
                color: "red",
                padding: "1rem",
                top: "49%",
                left: "38%",
                fontWeight: "600",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                borderRadius: "1rem",
              }}
            >
              project is under development
            </div>
          )}
          <div>
            <h1>My All Projects' lists :</h1>
          </div>
          <section className={`${styles["main-section-two"]}`}>
            {/* <div className={`${styles["main-section-child"]}`}> */}
            <div>
              <img
                src={classMateAppImg}
                alt=""
                onDoubleClick={handleRedirect}
              />
              <div>
                <h1>classMate</h1>
                <button
                  onClick={() => {
                    handleNavigate("class-mate");
                  }}
                >
                  learn more
                </button>
              </div>
            </div>
            <div>
              <img src={mayRigAppImg} alt="" onDoubleClick={handleRedirect} />
              <div>
                <h1>mayRig</h1>
                <button
                  onClick={() => {
                    handleNavigate("may-rig");
                  }}
                >
                  learn more
                </button>
              </div>
            </div>
            <div>
              <img src={weatherAppImg} alt="" onDoubleClick={handleRedirect} />
              <div>
                <h1>letsForecast</h1>
                <button
                  onClick={() => {
                    handleNavigate("lets-forecast");
                  }}
                >
                  learn more
                </button>
              </div>
            </div>
            <div>
              <img
                src={weCodeTogetherAppImg}
                alt=""
                onDoubleClick={handleRedirect}
              />
              <div>
                <h1>weCode Together</h1>
                <button
                  onClick={() => {
                    handleNavigate("we-code-together");
                  }}
                >
                  learn more
                </button>
              </div>
            </div>
            <div>
              <img
                src={technoTalkAppImg}
                alt=""
                onDoubleClick={handleRedirect}
              />
              <div>
                <h1>techTalk</h1>
                <button
                  onClick={() => {
                    handleNavigate("techno-talk");
                  }}
                >
                  learn more
                </button>
              </div>
            </div>
            <div>
              <img
                src={modernTodoAppImg}
                alt=""
                onDoubleClick={handleRedirect}
              />
              <div>
                <h1>doLists</h1>
                <button
                  onClick={() => {
                    handleNavigate("do-lists");
                  }}
                >
                  learn more
                </button>
              </div>
            </div>
            {/* </div> */}
          </section>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
};
