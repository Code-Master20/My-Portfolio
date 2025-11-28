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

export const Header = () => {
  // To track width of the page
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const trackWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", trackWidth);
  }, []);

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

  return (
    <>
      <nav className={styles["main-container"]}>
        {/* Web Logo Section */}
        <div className={styles["brandlogo-container"]}>
          <img src={Logo} alt="brand-logo" style={{ fill: "red" }} />
        </div>
        {/* Navigations Section */}

        {width < 600 ? (
          // for small devices and width <= 600px
          <>
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

            {toggled == true && (
              <div
                className={`${styles["navigation-container-small"]} ${
                  styles["view-adjustment"]
                } ${activated ? styles["animation-toggle"] : styles[""]} `}
              >
                {/* Home */}
                <NavLink to="#">Home</NavLink>
                {/* About */}
                <NavLink to="#">About</NavLink>
                {/* Projects */}
                <NavLink to="#">Projects</NavLink>
                {/* Contact */}
                <NavLink to="#">Contact</NavLink>
              </div>
            )}
          </>
        ) : (
          // for large devices and width >= 600px

          <div className={styles["navigation-container-large"]}>
            {/* Home */}
            <NavLink to="#">
              <IoHomeOutline />
              <span>Home</span>
            </NavLink>

            {/* About */}
            <NavLink to="#">
              <IoBookOutline />
              <span>About</span>
            </NavLink>

            {/* Projects */}
            <NavLink to="#">
              <GrProjects />
              <span>Projects</span>
            </NavLink>

            {/* Contact */}
            <NavLink to="#">
              <FaRegMessage />
              <span>Contact</span>
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};
