import React from "react";

const Toggle = ({ checked, onChange }) => (
  <span className="form-check form-switch my-2">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      checked={checked}
      onChange={onChange}
      id="flexSwitchCheckDefault"
    />
    <label className="form-check-label" htmlFor="form-check-input" />
  </span>
);

export default Toggle;
