import React from "react";

import styles from "./styles.css";
import { Button } from "../button";
import { ShareBlock } from "../share";
import { Input } from "../input";

export const Form = ({ onFormSubmit, email, share, submitButtonDisabled }) => {
    return (
        <form className={ styles.form } onSubmit={ onFormSubmit}>
            <fieldset>
                <legend className={ styles.legend}>Чтобы выиграть путешествие </legend>
                <ol>
                    <li>
                        <fieldset name="share" disabled={share}>
                            <input type="checkbox" checked={ share }></input>
                            <div className={styles.item}>
                                Поделись с друзьями:
                            </div>
                            <ShareBlock share={share}/>
                        </fieldset>
                    </li>
                    <li>
                        <fieldset name="email" disabled={Boolean(email)}>
                            <input type="checkbox" checked={ email }></input>
                            <div className={styles.item}>
                                Оставь почту:
                            </div>
                            <Input value={ email }/>
                        </fieldset>
                    </li>
                </ol>
                <Button disabled={ submitButtonDisabled } type="submit">Oтправить</Button>
            </fieldset>
        </form>
    );
}