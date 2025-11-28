import logoReact from "../../assets/react.svg";
import { IoHomeOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { FaRegMessage } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const trackWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", trackWidth);
  }, []);

  return (
    <>
      <nav className={styles["main-container"]}>
        {/* Web Logo Section */}
        <div className={styles["brandlogo-container"]}>
          <img src={logoReact} alt="brandLogo" />
        </div>
        {/* Navigations Section */}

        {width <= 600 ? (
          // for small devices and width <= 600px
          <div className={styles["navigation-container-small"]}>
            {/* Home */}
            <NavLink to="#">Home</NavLink>
            {/* About */}
            <NavLink to="#">About</NavLink>
            {/* Projects */}
            <NavLink to="#">Projects</NavLink>
            {/* Contact */}
            <NavLink to="#">Contact</NavLink>
          </div>
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
              <TbListDetails />
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
