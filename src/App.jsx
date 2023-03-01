/* eslint-disable import/no-unresolved */
/* eslint-disable import/named */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ALLEVENTS_ROUTE, EVENTS_ROUTE, ERROR_ROUTE } from "./constants/routes";
import { AllEvents, Event, Error, PageNotFound } from "./pages";

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ALLEVENTS_ROUTE} element={<AllEvents />} />
          <Route path={`${EVENTS_ROUTE}:eventId?`} element={<Event />} />
          <Route path={ERROR_ROUTE} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
