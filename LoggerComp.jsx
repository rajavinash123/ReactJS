import React from 'react'
import { useState,useEffect } from 'react'
const LoggerComp = () => {
    const[count,setCount]=useState(0)
  
      useEffect(() => {
        console.log('component rendered or count changed',count)
      }, [])
      //on every render
      
    return (
      <div>
        <h1>coutn:{count}</h1>
        <button onClick={()=>setCount(count+1)}>click me</button>
      </div>
    )
}

export default LoggerComp;
