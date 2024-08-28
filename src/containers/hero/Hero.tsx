import { useTranslation, Trans } from "react-i18next";
import styles from "./Hero.module.css";
import Button from "../../components/Button";
import profilePicture from "../../assets/profile.webp";

import {
  RiGithubLine as GitHub,
  RiMailLine as Mail,
  RiLinkedinLine as Linkedin,
} from "react-icons/ri";

export default function Hero() {
  const { t } = useTranslation();

  const Heading = () => {
    return (
      <div className={styles.header}>
        <span className={styles.header__pictureContainer}>
          <img
            className={styles.header__picture}
            src={profilePicture}
            alt="Facundo"
          />
        </span>
        <Button href="https://www.linkedin.com/in/facundopalombo/" highlighted>
          {t("Disponible para trabajar")}
        </Button>
      </div>
    );
  };

  function Titles() {
    return (
      <hgroup className={styles.titleGroup}>
        <h1 className={styles.title}>{t("Hola 👋, soy Facundo")}</h1>
        <h2 className={styles.subtitle}>
          <Trans>
            Soy desarrollador de software hace +5 años, con una alta
            especialización en <em>Frontend y liderazgo de equipos</em>
          </Trans>
        </h2>
      </hgroup>
    );
  }

  function CallsToAction() {
    return (
      <section className={styles.callsToAction}>
        <Button className={styles.link} href="mailto:facundo.palombo@gmail.com">
          <Mail />

          {t("Contáctame")}
        </Button>
        <Button
          href="https://www.linkedin.com/in/facundopalombo/"
          className={styles.link}
        >
          <Linkedin />
          {t("Conectemos en Linkedin")}
        </Button>
        <Button
          href="https://github.com/FacundoPalombo"
          className={styles.link}
        >
          <GitHub size={24} />
          {t("Sígueme en GitHub")}
        </Button>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      <Heading />
      <Titles />
      <CallsToAction />
    </section>
  );
}
