import { useState } from "react";

function HandleCheckBox(){
    const[skill,setSkill]=useState([]);
    const skillHandler=(event)=>{
        console.log(event.target.value,event.target.check);
        if(event.target.check){
            setSkill([...setSkill,event.target.value])
        }else{
            setSkill([...skill.filter((item)=>item!=event.target.value)])
        }
    }
return(
    <div style={{color:"red"}}>
        <h1>Learning CheckBox Concept</h1>
        <h2>Choose Your Skill</h2>
        <input onChange={skillHandler} type="checkbox" id="php"  value="php"/>
        <label htmlFor="php">PHP</label>
        <br />
         <input onChange={skillHandler} type="checkbox" id="java" value="java" />
        <label htmlFor="java">JAVA</label>
        <br />
         <input onChange={skillHandler} type="checkbox" id="paython" value="python" />
        <label htmlFor="python">PYTHON</label>
    </div>
)
}
export default HandleCheckBox;