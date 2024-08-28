import { useTranslation } from "react-i18next";
import Title from "../../components/Title";
import styles from "./AboutMe.module.css";
import { RiUserHeartLine as User } from "react-icons/ri";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutMe}>
      <Title>
        <User /> {t("Sobre mí")}
      </Title>
      <div>
        <div className={styles.aboutMe__content}>
          <p className={styles.aboutMe__contentText}></p>
          <p className={styles.aboutMe__contentText}></p>
          <p className={styles.aboutMe__contentText}></p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
}
