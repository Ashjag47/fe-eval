/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_EVENTS_BY_ID } from "../../constants/apiEndPoints";

function Button({ event }) {
  const [isRegistered, setRegistered] = useState(event.isRegistered);

  const regHandler = async () => {
    try {
      await makeRequest(UPDATE_EVENTS_BY_ID(event.id), {
        data: {
          isRegistered: !isRegistered,
        },
      });
      if (isRegistered) {
        setRegistered(false);
      } else {
        setRegistered(true);
      }
    } catch (e) {
      // TODO: Handle error
    }
  };

  const regStatus = isRegistered ? "UNREGISTER" : "REGISTER";
  return (
    <div className="reg-btn">
      <button onClick={regHandler}>{regStatus}</button>
    </div>
  );
}

export default Button;
