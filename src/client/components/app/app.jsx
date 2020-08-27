import React, { useEffect } from "react";
import { Logo } from "../logo";
import { Form } from "../form";

import "./style.css";

export const App = ({ initUser}) => {
    useEffect(() => {
        initUser();
    });

    return (
        <>
            <Logo top={30} left={30} />
            <Form />
        </>
    );
}