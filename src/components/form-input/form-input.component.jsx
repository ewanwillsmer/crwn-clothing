import React from "react";

import "./form-input.styles.scss";

// Generates dynamic FormInput component that passes onChange up to the SignIn component
// Has a dynamic className depending on if the value prop is non-empty
// Only generates a label a label prop is passed down eg. would not render a label for a button
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />

    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
