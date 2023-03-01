/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable import/named */
import React from "react";
// import "./Navbar.css";
// import { AUTHOR_ROUTE, ALLBOOKS_ROUTE } from "../../constants/routes";

import { Dropdown } from "..";

function Navbar({ genre, valueFilter, handleChangeFilter }) {
  let optionsFilter = [];

  optionsFilter = [
    ...genre.map((event) => ({
      label: event.toUpperCase(),
      value: event,
    })),
  ];
  return (
    <div>
      <nav>
        <div className="drop-down">
          <Dropdown
            label="Filter By"
            options={optionsFilter}
            value={valueFilter}
            onChange={handleChangeFilter}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
