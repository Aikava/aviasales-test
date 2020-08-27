import React from "react";

import styles from "./styles.css";

export const Input = ({ value }) => (
    <input
        name="email"
        className={styles.input}
        type="email"
        required={true}
        value={value}
    ></input>
);