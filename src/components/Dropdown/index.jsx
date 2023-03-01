/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from "react";

function Dropdown({ label, value, options, onChange }) {
  return (
    <label>
      {label}

      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}
export default Dropdown;
