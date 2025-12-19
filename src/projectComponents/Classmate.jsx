import styles from "./Classmate.module.css";
import projectImg from "../assets/ClassMate-App.png";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const Classmate = () => {
  /*
  It removes direction and gives distance only.
  Math.abs(-80) → 80
  Math.abs(80)  → 80
  */
  //navigating with horizontal swipe on mobile / tablet
  const navigate = useNavigate();
  const startX = useRef(0);

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    const diff = e.clientX - startX.current;

    if (Math.abs(diff) > 50) {
      diff > 0
        ? navigate("/projects/class-mate")
        : navigate("/projects/may-rig");
    }
  };

  return (
    <main
      className={styles["main-section-one"]}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <section className={styles["main-section-two"]}>
        <h1>classmate a social media like website.</h1>
        <article className={styles["main-content-container"]}>
          <div className={styles["img-container"]}>
            <button
              className={`${styles["next-btn"]}`}
              onClick={() => navigate("/projects/may-rig")}
            >
              next
            </button>
            <img src={projectImg} alt="" />
          </div>
          <div className={styles["project-des-container"]}>
            <div>
              <h2>Intro :</h2>
              <p>
                <span>ClassMate</span> is a dynamic social media-inspired
                platform designed to foster connection, creativity, and
                community. Built with user engagement at its core, ClassMate
                allows individuals to share their lives, ideas, and moments
                through rich media and interactive features.
              </p>
            </div>
            <br />
            <div>
              <h2>Key Features :</h2>
              <ul>
                <li>
                  <span>Multimedia Sharing:</span> Users can upload and share
                  photos and videos, creating vibrant posts that reflect their
                  experiences.
                </li>
                <li>
                  <span>Post Management:</span> Each user has full control over
                  their content — they can create, edit, and delete posts at any
                  time.
                </li>
                <li>
                  <span>Engagement Tools:</span> Posts are interactive, allowing
                  others to like and comment, sparking conversations and
                  feedback.
                </li>
                <li>
                  <span>User Profiles:</span> Each member has a personalized
                  profile showcasing their posts, activity, and connections.
                </li>
                <li>
                  <span>Responsive Design:</span> Optimized for both desktop and
                  mobile, ensuring a smooth experience across devices.
                </li>
                <li>
                  <span>Secure & Scalable:</span> Built with modern web
                  technologies to ensure data security and performance.
                </li>
              </ul>
            </div>
            <br />
            <div>
              <h2>Purpose :</h2>
              <p>
                <span>ClassMate</span> is more than just a social feed — it's a
                space where users can express themselves, connect with peers,
                and build a digital presence. Whether you're sharing a memory,
                showcasing a project, or starting a discussion, ClassMate gives
                you the tools to do it with style and control.
              </p>
            </div>
            <br />
          </div>
        </article>
      </section>
    </main>
  );
};
