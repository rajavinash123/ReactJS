import { useState } from "react";
const Counter=()=>{
    const[Counter,SetCounter]=useState(0);
    const[rCounter,SetRCounter]=useState(10);

    return(
        <div>
            <h1>Counter:{Counter}</h1>
            <h2>RCounter:{rCounter}</h2>
            <button onClick={()=>SetCounter(Counter+1)}>Update Counter</button>
                <button onClick={()=>SetRCounter(rCounter-1)}>Update R Counter</button>
            
        </div>
    )
}
export default Counter

