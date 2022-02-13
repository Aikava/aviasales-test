import { Form as Component } from "./form";
import { connect } from "react-redux";
import { pushUserData } from "../../applicationReducer";

function submitForm(dispatch, event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const jsonFormData = {};

  for (let [key, value] of formData.entries()) {
    jsonFormData[key] = value;
  }

  dispatch(pushUserData(jsonFormData));
}

function handleChanges(dispatch, event) {
  // сохраняем изменения куда то, чтобы потом их отправить.
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
    onFormSubmit: e => submitForm(dispatch, e),
    onChange: e => handleChanges(dispatch, e)
  }
};

export const Form = connect(mapStateToProps, mapDispatchToProps)(Component);
