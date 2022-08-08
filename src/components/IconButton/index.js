import React from "react";
import "./IconButton.scss";

export default function IconButton({ icon, theme, type, onClick }) {
  return (
    <button type={type} className="icon-button" theme={theme} onClick={onClick}>
      <img src={icon} alt={theme} />
    </button>
  );
}
