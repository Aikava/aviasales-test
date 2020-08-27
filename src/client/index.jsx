import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";
import { Provider } from "react-redux";
import { store } from "./applicationStore";

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById("app")
);

