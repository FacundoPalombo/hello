import { useState, useEffect, useCallback } from "react";
import styles from "./SeeMore.module.css";
import { useTranslation } from "react-i18next";

export default function SeeMore({
  text,
  threshold = 240,
}: {
  text: string;
  threshold?: number;
}) {
  const { t } = useTranslation();
  const [visibleText, setVisibleText] = useState(text);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setVisibleText(isVisible ? text : text.slice(0, threshold) + "...");
  }, [isVisible, text, threshold]);

  const changeTextVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return text?.length > threshold ? (
    <span className={styles.seeMore}>
      {visibleText}

      <button
        type="button"
        className={styles.seeMore__button}
        onClick={changeTextVisibility}
      >
        {!isVisible ? t("Ver más") : t("Ver menos")}
      </button>
    </span>
  ) : (
    <>{text}</>
  );
}
