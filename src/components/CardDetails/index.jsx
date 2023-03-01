/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React from "react";
import "./CardDetails.css";
import { getFormattedDateFromUtcDate } from "../../utils/common";
import { Button } from "..";

function CardDetails({ event }) {
  return (
    <div className="card-body-d" data-testid="event-body">
      <div className="card-img-d">
        <img src={event.imgUrl} alt="event" />
      </div>
      <div className="card-footer-d">
        <div className="card-txt-d">
          <div className="card-title-d">{event.name}</div>
          <div className="card-desc-d">{event.description}</div>
          <div className="card-venue-d">
            <span className="venue-d">Venue:</span> {event.venue}
          </div>
          <div className="card-date-d">
            <span className="date-d">Date:</span>
            {getFormattedDateFromUtcDate(event.datetime)}
          </div>
        </div>
        <div className="card-reg-d">
          <div className="reg-status-d">reg{event.isRegistered}</div>
          <div className="bookmark-d">book{event.isBookmarked}</div>
        </div>
        <Button event={event} />
      </div>
    </div>
  );
}

export default CardDetails;
