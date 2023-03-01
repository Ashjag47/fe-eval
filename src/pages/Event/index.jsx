/* eslint-disable no-shadow */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import makeRequest from "../../utils/makeRequest";
import {
  GET_EVENTS_BY_ID,
  UPDATE_EVENTS_BY_ID,
} from "../../constants/apiEndPoints";
import { Header, CardDetails, Footer } from "../../components";

function Event() {
  const [Event, setEvent] = useState();
  const [isRegistered, setRegistered] = useState();
  const { eventId } = useParams();
  useEffect(() => {
    makeRequest(GET_EVENTS_BY_ID(eventId), {}).then((response) => {
      const event = response;
      setEvent(event);
      setRegistered(event.isRegistered);
    });
  }, []);

  const regHandler = async () => {
    try {
      await makeRequest(UPDATE_EVENTS_BY_ID(Event.id), {
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

  return Event ? (
    <div>
      <Header />
      <CardDetails
        key={Event.id}
        event={Event}
        isRegistered={isRegistered}
        regHandler={regHandler}
      />
      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Event;
