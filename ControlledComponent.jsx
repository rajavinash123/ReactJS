import { useState } from "react";

function ControlledComponent(){
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    return(
        <div>
            <h1>Hlo Controlled component</h1>
            <form action="">
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="enter the name" />
                <br />
                <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="enter the password" />
                <br />
                <input type="e-mail"value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="enter the e-mail" />
                <br />
                <button>submit</button>
                <button onClick={()=>{setName('');setPassword(''),setEmail('')}}>Clear btn</button>
                <h3>{name}</h3>
                <h3>{password}</h3>
                <h3>{email}</h3>
            </form>


        </div>
    )
}
export default ControlledComponent;