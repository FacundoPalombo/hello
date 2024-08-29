import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__section}>asdas</div>
    </nav>
  );
}
