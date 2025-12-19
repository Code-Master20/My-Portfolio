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

  //navigation for different projects on learn more clicked
  const parentTab = JSON.parse(localStorage.getItem("parentPageActive"));
  const pageState =
    parentTab === null || parentTab === undefined ? true : parentTab;
  const navigate = useNavigate();
  const [parentPageActive, setParentPageActive] = useState(pageState);

  useEffect(() => {
    const parentTab = JSON.parse(localStorage.getItem("parentPageActive"));
    const navigatedTab = JSON.parse(localStorage.getItem("navigatedTab"));

    if (
      (parentTab !== undefined || parentTab !== null) &&
      parentTab === false
    ) {
      setIsProjectActive(parentTab);
      navigate(`/projects/${navigatedTab}`);
    }
  }, []);

  const handleNavigate = (navVal) => {
    setParentPageActive((prev) => !prev);
    navigate(`/projects/${navVal}`);
    localStorage.setItem("navigatedTab", JSON.stringify(navVal));
    localStorage.setItem("parentPageActive", JSON.stringify(false));
  };

  /*reading current path location of the user after user clicked on projects-nav
   or after localStorage items are removed */
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/projects") {
      setParentPageActive((prev) => !prev);
      localStorage.removeItem("parentPageActive");
      localStorage.removeItem("navigatedTab");
    }
  }, [location.pathname]);

  return (
    <>
      {parentPageActive === true ? (
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
