/* eslint-disable import/no-duplicates */
/* eslint-disable import/named */
import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Header, Card } from "../../components";
import makeRequest from "../../utils/makeRequest";
import { GET_ALL_EVENTS } from "../../constants/apiEndPoints";

import "./AllEvents.css";

function AllEvents() {
  const [allEvents, setEvents] = useState();
  useEffect(() => {
    makeRequest(GET_ALL_EVENTS, {}).then((response) => {
      const events = response;
      setEvents(events);
    });
  }, []);

  return allEvents ? (
    <div>
      <Header />
      <div className="card-grid">
        {allEvents.map((event) => (
          <Card key={event.id} event={event} />
        ))}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default AllEvents;
