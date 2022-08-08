import React, { memo } from 'react'
import * as P from "./Input.styled"

function Input({ id, name, type, label, value, onChange, style, required }) {
  return (
    <P.InputGroup>
        <P.Label htmlFor={id}>{label}</P.Label>
        <P.Input value={value} className='custom-input' id={id} type={type} name={name} onChange={onChange} style={style} required={required}/>
    </P.InputGroup>
  )
}

export default memo(Input)