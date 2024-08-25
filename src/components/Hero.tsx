import { useTranslation, Trans } from "react-i18next";
import styles from "./Hero.module.css";
import Button from "./Button";
import Linkedin from "../assets/Linkedin";
import Mail from "../assets/Mail";
import GitHub from "../assets/GitHub";

export default function Hero() {
  const { t } = useTranslation();

  const Heading = () => {
    return (
      <div className={styles.header}>
        <img
          className={styles.header__picture}
          src="https://avatars.githubusercontent.com/u/46170142?s=200&v=4"
          alt="Facundo"
        />
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
          <GitHub />
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
