/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/named */
import React from "react";
import { useState, useEffect } from "react";
import { Header, Card, Navbar, Footer } from "../../components";
import makeRequest from "../../utils/makeRequest";
import { GET_ALL_EVENTS } from "../../constants/apiEndPoints";

import "./AllEvents.css";

function AllEvents() {
  const [allEvents, setEvents] = useState();
  const [valueFilter, setValueFilter] = useState("all");
  const [allFilteredEvents, setFilteredEvents] = useState([]);
  useEffect(() => {
    makeRequest(GET_ALL_EVENTS, {}).then((response) => {
      const events = response;
      setEvents(events);
    });
  }, []);

  const filterBy = (prop) => {
    const propEvent = allEvents.filter((event) => {
      return event[prop] === true;
    });
    // setGenre(catSongs);
    return propEvent;
  };

  useEffect(() => {
    if (valueFilter === "all") {
      allEvents && setFilteredEvents(allEvents);
    } else {
      setFilteredEvents(filterBy(valueFilter));
    }
  }, [valueFilter, allEvents]);

  const handleChangeFilter = (event) => {
    setValueFilter(event.target.value);
  };

  return allEvents ? (
    <div>
      <Header />
      <Navbar
        genre={["all", "isRegistered", "isBookmarked", "areSeatsAvailable"]}
        valueFilter={valueFilter}
        handleChangeFilter={handleChangeFilter}
        // event={allFilteredEvents}
      />
      <div className="card-grid">
        {allFilteredEvents.map((event) => (
          <Card key={event.id} event={event} />
        ))}
      </div>
      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default AllEvents;
