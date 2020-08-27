import React from "react";

import styles from "./styles.css";

export const Input = ({ type  }) => (
    <input name="email" className={styles.input} type={type} required={true}></input>
);