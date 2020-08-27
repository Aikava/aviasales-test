import { App as Component } from "./app";
import {connect} from "react-redux";
import {pullUserData} from "../../applicationReducer";

const mapStateToProps = ({ email, share }) => {
    return { email, share };
}

const mapDispatchToProps = dispatch => ({
    initUser: () => dispatch(pullUserData()),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(Component);