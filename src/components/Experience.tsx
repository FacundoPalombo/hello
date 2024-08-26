import { ReactNode, ReactSVG } from "react";
import styles from "./Experience.module.css";

type ExperienceProps = {
  title: string;
  company: string;
  lastDate: string;
  children: ReactNode;
  logo: ReactNode;
};
export default function Experience({
  title,
  company,
  lastDate,
  children,
  logo,
}: ExperienceProps) {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <h3 className={styles.heading__title}>{title}</h3>
        <div className={styles.heading__timelapse}>
          <div className={styles.heading__logo}>{logo}</div>
          <div className={styles.heading__details}>
            <h4 className={styles.heading__company}>{company}</h4>
            <time className={styles.heading__date}>{lastDate}</time>
          </div>
        </div>
      </div>
      <div className={styles.details}>{children}</div>
    </div>
  );
}
