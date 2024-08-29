import { GrLanguage as Lang } from "react-icons/gr";
import { useTranslation } from "react-i18next";

import styles from "./LanguageSelector.module.css";
import Spain from "../assets/Spain";
import Italy from "../assets/Italy";
import UK from "../assets/UK";
import { useState } from "react";

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  console.log(i18n.language);

  return (
    <span className={styles.languageSelector}>
      {isOpen && (
        <span className={styles.languageSelector__languages}>
          <a className={styles.languageSelector__option} href="?lng=es">
            es <Spain />
          </a>
          <a className={styles.languageSelector__option} href="?lng=en">
            en <UK />
          </a>
          <a className={styles.languageSelector__option} href="?lng=it">
            it <Italy />
          </a>
        </span>
      )}
      <button
        className={styles.languageSelector__select}
        onClick={() => setIsOpen(!isOpen)}
      >
        {i18n.language}
        <Lang />
      </button>
    </span>
  );
}
