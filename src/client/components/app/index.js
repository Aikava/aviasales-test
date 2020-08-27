import { App as Component } from "./app";
import {connect} from "react-redux";
import {pullUserData} from "../../applicationReducer";

const mapDispatchToProps = dispatch => ({
    initUser: () => dispatch(pullUserData()),
});

export const App = connect(null, mapDispatchToProps)(Component);