import React from "react";

import styles from "./styles.css";

export const Button = ({ type, children }) => (
    <div className={styles.buttonWrapper }>
        <button type={ type } className={ styles.button }>
            { children }
        </button>
    </div>
);