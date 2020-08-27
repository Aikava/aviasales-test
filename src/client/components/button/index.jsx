import React from "react";

import styles from "./styles.css";

export const Button = ({ type, children, disabled }) => (
    <div className={styles.buttonWrapper }>
        <button type={ type } className={ styles.button } disabled={disabled}>
            { children }
        </button>
    </div>
);