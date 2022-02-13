import React from "react";
import styles from "./styles.css";

export function Final() {
  return (
    <div className={styles.final}>
      <div className={styles.text}>
        <div className={styles.title}>
          Выборы
        </div>
        <div className={styles.travel}>
          Путешествие
        </div>
        <div className={styles.near}>
          близко!
        </div>
      </div>
    </div>
  );
}
