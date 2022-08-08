import React, { useEffect, useState } from "react";
import * as P from "./Toast.styled";

export default function Toast({ type, message, time }) {
  const [close, setClose] = useState(false); 
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    setTimeout(() => {
      setClose(true)
    }, time);
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev - 1)
    }, 10);

    return () => {
      clearInterval(interval)
    }
  }, [progress]);

  return (
    <P.Toast type={type} className={`toast-${type}`} style={{right: close && "-1000px"}} data-testid="toast">
      <P.Text data-testid="toast-message">{message}</P.Text>
      <P.Timer style={{width: `${progress}%`}}></P.Timer>
    </P.Toast>
  );
}
