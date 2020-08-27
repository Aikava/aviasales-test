import React from "react";

import styles from "./styles.css";
import { Button } from "../button";
import { Input } from "../input";
import { ShareBlock } from "../share";

export const Form = ({ onFormSubmit }) => {
    return (
        <form className={ styles.form } onSubmit={ onFormSubmit}>
            <fieldset>
                <legend className={ styles.legend}>Чтобы выиграть путешествие </legend>
                <ol>
                    <li>
                        <fieldset name="share">
                            <div className={styles.item}>
                                Поделись с друзьями:
                            </div>
                            <ShareBlock />
                        </fieldset>
                    </li>
                    <li>
                        <fieldset name="email">
                            <div className={styles.item}>
                                Оставь почту:
                            </div>
                            <Input />
                        </fieldset>
                    </li>
                </ol>
                <Button type="submit">Oтправить</Button>
            </fieldset>
        </form>
    );
}