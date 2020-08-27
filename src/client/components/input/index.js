import React from "react";
import {connect} from "react-redux";
import { Input as Component } from "./input";
import {updateLocalEmail} from "../../applicationReducer";

const mapStateToProps = ({ email, inputValue }) => {

    return { value: email || inputValue };
};

const mapDispatchToProps = dispatch => {
  return {
      onChange: (event) => dispatch(updateLocalEmail({ email: event.target.value || "" }))
  };
};

export const Input = connect(mapStateToProps, mapDispatchToProps)(Component);