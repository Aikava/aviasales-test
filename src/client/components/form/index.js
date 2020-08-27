import { Form as Component } from "./form";
import {connect} from "react-redux";
import {pushUserData} from "../../applicationReducer";

function submitForm(dispatch, event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonFormData = {};

    for (let [key, value] of formData.entries()) {
        jsonFormData[key] = value;
    }

    dispatch(pushUserData(jsonFormData));
}



const mapStateToProps = ({ email, share, inputValue }) => {
    return {
        email,
        share,
        inputValue,
        submitButtonDisabled: !inputValue
    };
}

const mapDispatchToProps = dispatch => {
  return {
      onFormSubmit: e => submitForm(dispatch, e)
  }
};

export const Form = connect(mapStateToProps, mapDispatchToProps)(Component);