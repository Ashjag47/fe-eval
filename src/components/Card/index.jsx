/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { getFormattedDateFromUtcDate } from "../../utils/common";
import { EVENTS_ROUTE } from "../../constants/routes";
import { RegBook } from "..";

function index({ event }) {
  const navigate = useNavigate();
  console.log(event.isRegistered);
  return (
    <div className="card-body" data-testid="event-body">
      <div
        className="without-regbook"
        onClick={() => navigate(`${EVENTS_ROUTE}${event.id}`)}
      >
        <div className="card-img">
          <img src={event.imgUrl} alt="event" />
        </div>
        <div className="card-footer">
          <div className="card-txt">
            <div className="card-title">{event.name}</div>
            <div className="card-desc">{event.description}</div>
            <div className="card-venue">
              <span className="venue">Venue:</span> {event.venue}
            </div>
            <div className="card-date">
              <span className="date">Date:</span>{" "}
              {getFormattedDateFromUtcDate(event.datetime)}
            </div>
          </div>
        </div>
      </div>
      <RegBook event={event} />
    </div>
  );
}

export default index;
