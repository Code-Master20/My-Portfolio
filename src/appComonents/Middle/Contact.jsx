import { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import contactImg from "../../assets/Contact.png";
import {
  FaGithub,
  FaFacebook,
  FaInstagramSquare,
  FaTelegram,
} from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";

export const Contact = () => {
  const [width, setWidth] = useState(window.outerWidth);
  useEffect(() => {
    const trackWidth = () => {
      setWidth(window.outerWidth);
    };
    window.addEventListener("resize", trackWidth);
  }, []);

  return (
    <main className={styles["main-section-one"]}>
      <section className={styles["main-section-two"]}>
        <div className={styles["main-section-child"]}>
          <h1>Contact me following the below options</h1>
          <div className={styles["contact-form-container"]}>
            <form>
              <div>
                <div>
                  <label htmlFor="message">message us :</label>
                  <textarea name="" id="message"></textarea>
                </div>
                <button>send message</button>
              </div>
            </form>
            {width > 767.99 && (
              <div className={`${styles["img-container"]}`}>
                <img src={contactImg} alt="contact-image" />
              </div>
            )}
          </div>
          <div className={styles["my-contact-details"]}>
            <div>
              <h1>direct contact options</h1>
              <ol>
                <li>
                  <a href="mailto:sahidurmiah201920@gmail.com">
                    <span>
                      <MdEmail />
                    </span>
                    <span>sahidurmiah201920@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:quranhadish700@gmail.com">
                    <span>
                      <MdEmail />
                    </span>
                    <span>quranhadish700@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+199366369724">
                    <span>
                      <MdCall />
                    </span>
                    <span>9366369724</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+198798659968">
                    <span>
                      <MdCall />
                    </span>
                    <span>8798659968</span>
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <div className={styles["social-media-container"]}>
            <div>
              <h1>My Social Accounts</h1>
              <div>
                <article>
                  <span>
                    <FaGithub />
                  </span>
                  <a
                    href="https://github.com/Code-Master20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                </article>
                <article>
                  <span>
                    <FaFacebook />
                  </span>
                  <a
                    href="https://www.facebook.com/share/1GjYVJUbSt/"
                    target="_blank"
                  >
                    facebook
                  </a>
                </article>
                <article>
                  <span>
                    <FaInstagramSquare />
                  </span>
                  <a
                    href="https://www.instagram.com/be_patience_code09?igsh=Z2g3a3NxNmNvajA5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    instagram
                  </a>
                </article>
                <article>
                  <span>
                    <FaTelegram />
                  </span>
                  <a
                    href="http://www.t.me/CodeMaster205"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    telegram
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
