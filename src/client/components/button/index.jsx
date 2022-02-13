import React from "react";

import styles from "./styles.css";

export function Button({type, children, disabled}) {
  return (
    <div className={styles.buttonWrapper}>
      <button type={type} className={styles.button} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}
