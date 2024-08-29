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
            {t(
              "¡Hola! Soy Facundo, y me encanta el mundo del desarrollo frontend! Soy una persona naturalmente curiosa, cuando me encuentro con un problema que puede tener una solución tecnológica, me obsesiono para encontrar la solución."
            )}
          </p>
          <p className={styles.aboutMe__contentText}>
            {t(
              "Amo el mundo del desarrollo de software, me considero un especialista frontend, pero mis intereses son varios. Me gusta la arquitectura de software, el liderazgo técnico, las metodologías agiles, el desarrollo backend, y muchas otras cosas más."
            )}
          </p>
          <p className={styles.aboutMe__contentText}>
            {t(
              "¡Siempre estoy en búsqueda de nuevos desafíos! ¡Y considero que todos los días es una oportunidad para aprender algo nuevo!"
            )}
            <br />
            <strong>
              {t("Conectemos y veamos a donde nos lleva este viaje inesperado")}
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
