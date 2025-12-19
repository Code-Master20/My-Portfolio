import Logo from "../../assets/react.svg";
import { IoHomeOutline } from "react-icons/io5";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { GiTireIronCross } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // To track width of the page
  const [width, setWidth] = useState(window.outerWidth);
  useEffect(() => {
    const trackWidth = () => {
      setWidth(window.outerWidth);
    };
    window.addEventListener("resize", trackWidth);
  }, []);
  console.log(width);

  //functionality for toggling cross- and equalTo-buttons for mobile devices
  const [toggled, setToggled] = useState(false);
  const toggleCrossEqualButtons = () => {
    setTimeout(() => {
      setToggled((prev) => !prev);
    }, 400);
  };

  //functionality for smooth animation of bundle button-box
  const [activated, setActivated] = useState(false);
  const animationToggle = () => {
    setActivated(true);
  };

  setTimeout(() => {
    animationToggle();
  }, 1);

  //navigate to home on brandLogo click
  const navigate = useNavigate();

  return (
    <>
      <nav className={styles["main-container"]}>
        <div>
          {/* Web Logo Section */}
          <div
            className={styles["brandlogo-container"]}
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="brand-logo" style={{ fill: "red" }} />
          </div>
          {/* Navigations Section */}

          {width < 600 ? (
            // cross and bundle buttons vissible for small devices width < 600px
            <div>
              {toggled ? (
                <GiTireIronCross
                  className={styles["cross-toggle"]}
                  onClick={toggleCrossEqualButtons}
                />
              ) : (
                <RiDashboardHorizontalLine
                  className={styles["bundle-toggle"]}
                  onClick={toggleCrossEqualButtons}
                />
              )}
            </div>
          ) : (
            // for large devices and width >= 600px

            <div className={styles["navigation-container-large"]}>
              {/* Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? styles["active-nav"] : ""}`
                }
              >
                <IoHomeOutline className={styles["home"]} />
                <span>Home</span>
              </NavLink>

              {/* About */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? styles["active-nav"] : ""}`
                }
              >
                <IoBookOutline className={styles["about"]} />
                <span>About</span>
              </NavLink>

              {/* Projects */}
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? styles["active-nav"] : ""}`
                }
                to="/projects"
              >
                <GrProjects className={styles["projects"]} />
                <span>Projects</span>
              </NavLink>

              {/* Contact */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? styles["active-nav"] : ""}`
                }
              >
                <FaRegMessage className={styles["contact"]} />
                <span>Contact</span>
              </NavLink>
            </div>
          )}
        </div>
      </nav>
      {toggled == true && (
        <div
          className={`${styles["navigation-container-small"]} ${
            activated ? styles["animation-toggle"] : ""
          } `}
        >
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? styles["small-nav-active"] : ""}`
            }
          >
            Home
          </NavLink>
          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? styles["small-nav-active"] : ""}`
            }
          >
            About
          </NavLink>
          {/* Projects */}
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${isActive ? styles["small-nav-active"] : ""}`
            }
          >
            Projects
          </NavLink>
          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? styles["small-nav-active"] : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </>
  );
};
