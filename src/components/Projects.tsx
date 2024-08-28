import { useTranslation } from "react-i18next";
import { RiCodeSSlashLine as Code } from "react-icons/ri";
import styles from "./Projects.module.css";
import Button, { ButtonProps } from "./Button";
import Pill from "./Pill";
import successCases from "../fixtures/SuccessCases.fixture";

function Title() {
  const { t } = useTranslation();

  return (
    <h2 className={styles.projects__title}>
      <Code />
      {t("Casos de éxito")}
    </h2>
  );
}

export type SuccessCaseProps = {
  image: string;
  title: string;
  technologies: string[];
  description: string;
  links: ButtonProps[];
};

function SuccessCase({
  image,
  title,
  technologies,
  description,
  links,
}: SuccessCaseProps) {
  return (
    <div className={styles.successCase__container}>
      <div className={styles.successCase__image}>
        <img src={image} alt={title} className={styles.successCase__picture} />
      </div>
      <div className={styles.successCase__content}>
        <h3 className={styles.successCase__title}>{title}</h3>
        {technologies?.length > 0 && (
          <div className={styles.successCase__pills}>
            {technologies.map((technology) => (
              <Pill key={technology + " " + title} name={technology} />
            ))}
          </div>
        )}
        <p className={styles.successCase__description}>{description}</p>
        {links?.length > 0 && (
          <div className={styles.successCase__links}>
            {links.map(({ href, children }) => (
              <Button
                href={href}
                key={href}
                className={styles.successCase__link}
              >
                {children}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className={styles.projects}>
      <Title />
      {successCases.map(
        ({ description, image, links, technologies, title }) => (
          <SuccessCase
            key={title}
            description={description}
            image={image}
            links={links}
            technologies={technologies}
            title={title}
          />
        )
      )}
    </section>
  );
}
