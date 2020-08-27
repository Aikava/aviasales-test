import React from "react";
import { Logo } from "../logo";
import { Form } from "../form";

import "./style.css";

export const App = () => {
    return (
        <>
            <Logo top={30} left={30} />
            <Form />
        </>
    );
}