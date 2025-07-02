import React, { useState } from "react";
import './Counter.css'
const Counter=()=>{
    const[counter,setCounter]=useState(16)
    return(
<div className="counter-container">
   <p id="para"> you have clioccked {counter} time</p>
   <button  id="btn" onClick={()=>setCounter(counter+1)}>Increase me </button>
   <button  id="btn" onClick={()=>{setCounter(counter-1)}}>Decrese me </button>
   <button id="btn" onClick={()=>{setCounter(0)}}>Reset</button>
</div>
    )
}
export default Counter;


