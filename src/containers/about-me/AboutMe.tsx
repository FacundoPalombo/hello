import { useTranslation } from "react-i18next";
import Title from "../../components/Title";
import styles from "./AboutMe.module.css";
import { RiUserHeartLine as User } from "react-icons/ri";
import me from "../../assets/me.webp";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="about-me" className={styles.aboutMe}>
      <Title>
        <User /> {t("Sobre mí")}
      </Title>
      <div className={styles.aboutMe__content}>
        <div className={styles.aboutMe__avatar}>
          <img
            src={me}
            alt={t("Yo y mi mejor amigo, Ubbe.")}
            className={styles.aboutMe__profilePicture}
          />
        </div>
        <div className={styles.aboutMe__description}>
          <p className={styles.aboutMe__contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            facere molestias accusamus, temporibus ab aliquid ducimus rerum ad
            repellendus nam architecto doloribus, similique, expedita ex quidem
            commodi quaerat id rem.
          </p>
          <p className={styles.aboutMe__contentText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora
            ad quo saepe consequatur molestiae, odit mollitia quas voluptate? In
            repudiandae possimus sapiente totam illo cumque temporibus, minima
            soluta nihil?
          </p>
          <p className={styles.aboutMe__contentText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            voluptatum cumque ut perferendis in velit. Nihil animi quo beatae
            doloribus, vel iusto reprehenderit nemo corrupti accusamus magnam
            libero quis suscipit.
          </p>
        </div>
      </div>
    </section>
  );
}
