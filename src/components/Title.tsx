import styles from "./Title.module.css";
import React from "react";

export default function Title({ children }: React.PropsWithChildren) {
  return <h2 className={styles.title}>{children}</h2>;
}
