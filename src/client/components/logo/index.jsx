import React from "react";
import styles from "./styles.css";

export const Logo = ({ top = "0", left = "0" }) => {
    return (<div className={ styles.logo } style={{ top, left }}></div>);
}