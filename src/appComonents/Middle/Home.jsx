import styles from "./Home.module.css";
import developerImg from "../../assets/SahidurImage.jpg";
export const Home = () => {
  return (
    <section className={styles["main-section"]}>
      {/* Introductory Section */}
      <section className={styles["introductory-main-container"]}>
        {/* img and short intro of me */}
        <div className={styles["img-and-intro"]}>
          {/* img-div */}
          <div className={styles["img-container"]}>
            <img src={developerImg} alt="project owner" />
            <h1 className={styles["owner-name"]}>
              <span>Mr. Sahidur Miah</span>
              <span>(MERN-STACK/FullStack)</span>
            </h1>
          </div>
          {/* intro-about owner */}
          <div className={styles["intro-of-owner"]}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              ipsam quia vitae mollitia consequuntur id illo aspernatur voluptas
              voluptatem? Fuga. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Praesentium non commodi sapiente eos temporibus
              voluptatum repellendus minima quod doloremque soluta!
            </p>
          </div>
        </div>
        {/* details of this current project */}
        <div className={styles["this-project-details"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            quibusdam quae tempora. Accusantium nobis dicta corporis cupiditate
            eveniet sapiente necessitatibus cum quia vero itaque? Voluptatem
            officiis voluptas iste enim nihil?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            voluptatibus minus id dolor vero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            velit nemo rem optio debitis corporis molestiae eaque quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            quibusdam delectus, ipsam voluptatibus et excepturi odit repellendus
            exercitationem veritatis sequi cum pariatur reprehenderit!
          </p>
        </div>
      </section>
      {/* Projects' overview section */}
      <section>projects' overview section</section>
    </section>
  );
};
