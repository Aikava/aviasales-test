import { Form as Component } from "./form";

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonFormData = {};

    for (let [key, value] of formData.entries()) {
        jsonFormData[key] = value;
    }

    fetch("/users/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonFormData)
    });
}

export const Form = () => {
  return Component({ onFormSubmit });
};