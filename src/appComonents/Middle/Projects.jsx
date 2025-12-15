import styles from "./Projects.module.css";
import classMateAppImg from "../../assets/ClassMate-App.png";
import mayRigAppImg from "../../assets/mayRig.png";
import modernTodoAppImg from "../../assets/Modern-Todo-App.png";
import technoTalkAppImg from "../../assets/Techno-Talk-Pvt-Ltd.png";
import weatherAppImg from "../../assets/Weather-App.png";
import weCodeTogetherAppImg from "../../assets/weCodeTogether-App.png";
import { useRef, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const Projects = () => {
  const parentRef = useRef(null);
  const [childrens, setChildrens] = useState([]);

  useEffect(() => {
    if (parentRef.current) {
      const children = parentRef.current.children;
      setChildrens(children);
    }
  }, []);

  //navigation for different projects on learn more clicked
  const navigate = useNavigate();
  const [parentPageActive, setParentPageActive] = useState(true);

  const handleNavigate = (navVal) => {
    setParentPageActive((prev) => !prev);
    navigate(`/projects/${navVal}`);
  };

  return (
    <>
      {parentPageActive === true && (
        <main className={`${styles["main-section-one"]}`}>
          <div>
            <h1>My All Projects' lists :</h1>
          </div>
          <section className={`${styles["main-section-two"]}`} ref={parentRef}>
            {/* <div className={`${styles["main-section-child"]}`}> */}
            <div>
              <img src={classMateAppImg} alt="" />
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
              <img src={mayRigAppImg} alt="" />
              <div>
                <h1>mayRig</h1>
                <button>learn more</button>
              </div>
            </div>
            <div>
              <img src={weatherAppImg} alt="" />
              <div>
                <h1>letsForecast</h1>
                <button>learn more</button>
              </div>
            </div>
            <div>
              <img src={weCodeTogetherAppImg} alt="" />
              <div>
                <h1>weCode Together</h1>
                <button>learn more</button>
              </div>
            </div>
            <div>
              <img src={technoTalkAppImg} alt="" />
              <div>
                <h1>techTalk</h1>
                <button>learn more</button>
              </div>
            </div>
            <div>
              <img src={modernTodoAppImg} alt="" />
              <div>
                <h1>doLists</h1>
                <button>learn more</button>
              </div>
            </div>
            {/* </div> */}
          </section>
        </main>
      )}

      <Outlet setParentPageActive={setParentPageActive} />
    </>
  );
};
