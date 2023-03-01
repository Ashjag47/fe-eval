/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { UPDATE_EVENTS_BY_ID } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";
import "./RegBook.css";

function RegBook({ event }) {
  const [isBookmarked, setBookmarked] = useState(event.isBookmarked);
  const bookHandler = async () => {
    try {
      await makeRequest(UPDATE_EVENTS_BY_ID(event.id), {
        data: {
          isBookmarked: !isBookmarked,
        },
      });
      if (isBookmarked) {
        setBookmarked(false);
      } else {
        setBookmarked(true);
      }
    } catch (e) {
      // TODO: Handle error
    }
  };
  return (
    <div className="card-reg">
      <div className="reg-status">
        {event.isRegistered && (
          <div className="reg-success">
            {" "}
            <i className="fa-solid fa-circle-check" />
            REGISTERED
          </div>
        )}
        {!event.areSeatsAvailable && (
          <div className="reg-fail">
            {" "}
            <i className="fa-solid fa-circle-xmark" />
            NO SEATS AVAILABLE
          </div>
        )}
      </div>
      <div className="bookmark" onClick={() => bookHandler()}>
        {isBookmarked ? (
          <i className="fa-solid fa-bookmark" />
        ) : (
          <i className="fa-regular fa-bookmark" />
        )}
      </div>
    </div>
  );
}

export default RegBook;
