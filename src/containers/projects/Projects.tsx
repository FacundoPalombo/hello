import { useTranslation } from "react-i18next";
import { RiCodeSSlashLine as Code } from "react-icons/ri";
import styles from "./Projects.module.css";
import Button, { ButtonProps } from "../../components/Button";
import Pill from "../../components/Pill";
import cases from "./cases";
import Title from "../../components/Title";
import SeeMore from "../../components/SeeMore";

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
        <p className={styles.successCase__description}>
          <SeeMore text={description} />
        </p>
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
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.projects}>
      <Title>
        <Code />
        {t("Casos de éxito")}
      </Title>
      <div className={styles.projects__list}>
        {cases.map(
          ({
            description,
            image,
            links,
            technologies,
            title,
          }: SuccessCaseProps) => (
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
      </div>
    </section>
  );
}
