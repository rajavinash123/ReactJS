import React, { useState } from 'react'

function TextChnage() {
  const[message,setMessage]=useState("Avinash Learn")
  const chnageMessage=()=>{
    setMessage("Wlecome Avinash");
  }
  return (
    <div>
    <h1>{message}</h1>
    <button onClick={chnageMessage}>ChnageMessage</button>
    </div>
  )
}

export default TextChnage;
