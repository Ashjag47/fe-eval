/* eslint-disable no-shadow */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import makeRequest from "../../utils/makeRequest";
import { GET_EVENTS_BY_ID } from "../../constants/apiEndPoints";
import { Header, CardDetails } from "../../components";

function Event() {
  const [Event, setEvent] = useState();
  const { eventId } = useParams();
  useEffect(() => {
    makeRequest(GET_EVENTS_BY_ID(eventId), {}).then((response) => {
      const event = response;
      setEvent(event);
    });
  }, []);

  return Event ? (
    <div>
      <Header />
      <CardDetails key={Event.id} event={Event} />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Event;
