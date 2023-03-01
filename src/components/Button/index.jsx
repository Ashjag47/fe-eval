/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";

function Button({ isRegistered, regHandler }) {
  const regStatus = isRegistered ? "UNREGISTER" : "REGISTER";
  return (
    <div className="reg-btn">
      <button onClick={regHandler}>{regStatus}</button>
    </div>
  );
}

export default Button;
