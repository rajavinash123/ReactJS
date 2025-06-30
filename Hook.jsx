import { useActionState, useState } from "react";
import Counter from "./counter";

function Hook(){
    const [fruit,setFruit]=useState("Apple");
    const handleFruit=()=>{
        setFruit("Banana");
    }

    const[vegitable,setVegitable]=useState("Pumpkin");
    const handleVegitable=()=>{
        setVegitable("Kela")
    }

    return(
        <div>
            <Counter/>
            <h1>Sate in React</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change Fruit Name</button>
            <h1>{vegitable}</h1>
            <button onClick={handleVegitable}>Change Vegitabel Name</button>
        </div>
    )


}
export default Hook;