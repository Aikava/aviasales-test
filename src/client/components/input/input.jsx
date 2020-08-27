import React, {useState} from "react";

import styles from "./styles.css";

export const Input = ({ value, onChange }) => {

    return (<input
        name="email"
        className={styles.input}
        type="email"
        required={true}
        value={value}
        onChange={ onChange }
    ></input>);
};