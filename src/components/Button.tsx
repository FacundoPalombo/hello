import React from "react";
import styles from "./Button.module.css";
import { clsx } from "clsx";

export type ButtonProps = {
  children: React.ReactNode | undefined;
  href?: string;
  className?: string;
  highlighted?: boolean;
  target?: string;
};

export default function Button({
  children,
  href,
  className,
  highlighted,
  target = "_blank",
}: ButtonProps) {
  return (
    <span className={styles.cta}>
      <div className={clsx(highlighted && styles.cta__gradient)}></div>
      {href ? (
        <a
          target={target}
          rel="noopener noreferrer"
          href={href}
          className={clsx(styles.cta__button, className)}
        >
          {children}
        </a>
      ) : (
        <button className={clsx(styles.cta__button, className)}>
          {children}
        </button>
      )}
    </span>
  );
}
