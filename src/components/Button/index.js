import React, { memo } from 'react'
import "./Button.scss"

function Button({ text, theme, type, onClick, disabled, active }) {
  return (
    <button type={type} className={`custom-button custom-button-${theme} ${active ? "active-button" : ""}`} onClick={onClick} disabled={disabled}>{text}</button>
  )
}

export default memo(Button)