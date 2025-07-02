// import { useState } from 'react';
// import './App.css';
// import User from './User';
// import FirstCom from './FirstCom';
// import Login, { UserKey } from './ImpExpComponent';
// import { Profile } from './ImpExpComponent';
// import { Satting } from './ImpExpComponent';
// import ToDo  from './ToDo';

import { useState } from "react";
import UseEffect from "./UseEffect";

// function App() {
//   const [counter, setCount] = useState(0);

//   // jsx concept
//   const userName="Avinash Kumar";
//   let  x=10;
//   let y=20;

//   return (
//     <>
//       {/* <h2>GOOD MORNING</h2>
//       <h1>Counter value: {counter}</h1>
//       <button onClick={() => setCount(counter + 1)}>Increase Counter Value</button>
//       <User />
//       <FirstCom />
//       <Profile/>
//       <Login/>
//       <Satting/>
//       <h1>{UserKey}</h1> */}
//       <ToDo/>
//       <h1>{userName}</h1>
//       <h2>{x*y}</h2>
// <button onClick={(alert("HLO"))}></button>
//     </>
//   );
// }

// export default App;

// import { useState } from 'react';
// import './App.css';
// import User from './User';
// import FirstCom from './FirstCom';
// import Login, { UserKey } from './ImpExpComponent';
// import { Profile } from './ImpExpComponent';
// import { Satting } from './ImpExpComponent';
// import ToDo  from './ToDo';
// import Variable  from './JsxWithCurlyBraces';

// function App() {
//   const [counter, setCount] = useState(0);

//   return (
//     <>
// <Variable/>

//     </>
//   );
// }
// export default App;

// import { useState } from 'react';
// import './App.css';
// import Click from './ClickEventAndFunctionCall';
// function App() {
//   const [counter, setCount] = useState(0);
//   return (
//     <>
// <Click/>

//     </>
//   );
// }
// export default App;

//hook

// import { useState } from 'react';
// import './App.css';
// import Hook  from './Hook';
// function App() {
//   const [counter, setCount] = useState(0);
//   return (
//     <>
// <Hook/>

//     </>
//   );
// }
// export default App;

//toggle hide and show

// import { useState } from 'react';
// import './App.css';
// import Toggle  from './Toggle';
// function App() {
//   const[display,setDisplay]=useState(true);
//   return (
//     <>
// <h1>Toggle in react jsx</h1>
// {/* {
//   display? <h1>Avinash kumar</h1>:null
// } */}

// {
//   display?<Toggle/>:null
// }

// <button onClick={()=>setDisplay(!display)}>Toggle</button>
//     </>
//   )
// }
// export default App;

//prop concept

// import ChildernComp from './Prop';
// import { Children } from 'react';
// import './App.css';

// function App() {

//   let userObject={
//     name:"Raja",
//     age:50,
//     email:"raja@gmial.com"
//   }
//   return (

//     <div>
// <ChildernComp name="Good Evening" age={30} email="Avinash@gmail.com" User={userObject}/>

//     </div>

//   )
// }
// export default App;

//chnage style with props
// import Style from "./Style";
// import './App.css';

// function App(){
//   return(<>
//   <div>
//    <Style color="orange " background="white">
// <h1>Hlo EveryOne </h1>
//     <h1>Learning Day 4</h1>
//    </Style>

//     </div>

//   </>
//   )

// }

// export default App;

// // Get input field value
// import InputField from "./InputField";
//  import './App.css';

//  function App(){
//   return(
//     <>
//     <div>
//       <InputField/>
//     </div>
//     </>
//   )
//  }

//  export default App;

// //controlled component

//  import controlledComponent from "./ControlledComponent";
//   import './App.css';
// import ControlledComponent from "./ControlledComponent";
//  function App(){
//   return(
//     <>
//     <div>
//     <ControlledComponent/>
//     </div>
//     </>
//   )
//  }

//  export default App;

//Handle checkBox concept

//   import './App.css';
//   import HandleCheckBox from "./HandleCheckBox"

//  function App(){
//   return(
//     <>
//     <div>
//     <HandleCheckBox/>
//     </div>
//     </>
//   )
//  }

//  export default App;

//Handle Radio and DropDown in react js
//  import './App.css';
//   import HandleRadioDropdown from './HandleRadioDropdown';

//  function App(){
//   return(
//     <>
//     <div>
//     <HandleRadioDropdown/>
//     </div>
//     </>
//   )
//  }

//  export default App;

// //learning Loop in jsx and Map
// import './App.css';
// import LoopAndMap from './LoopAndMap';

//  function App(){

//   return(
//     <>
//     <div>
//   <LoopAndMap/>
//     </div>
//     </>
//   )
//  }

//  export default App;

//learning resued comp-onent in loop

//learning Loop in jsx and Map
// import './App.css';
// import ReusedComp from "./ReusedComp";

// function App() {
//   const userData = [
//     { name: "avinash", age: "29", email: "avinash@gmail.com", id: "1" },
//     { name: "raj", age: "30", email: "raj@gmail.com", id: "2" },
//     { name: "vk", age: "22", email: "vk@gmail.com", id: "3" },
//     { name: "ck", age: "39", email: "ck@gmail.com", id: "4" },
//   ];

//   return (
//     <div>
//       <h1>Reusable Component in Loop</h1>
//       {userData.map((user) => (
//         <ReusedComp key={user.id} user={user} />
//       ))}
//     </div>
//   );
// }

// export default App;

//:Learning useEffect and make clock

// function App(){

//   return(
//     <>
//     <div>
//       <UseEffect />

//     </div>
//     </>
//   )
// }
// export default App;

//learning nestedLoop concept

// import NestedLoop from "./NestedLoop";

// function App(){

//   return(
//     <>
//     <div>
//       <NestedLoop />

//     </div>
//     </>
//   )
// }
// export default App;

//useState hooks learn

// import './App.css'
// import Counter from "./Component/Counter";

// function App(){

//   return(
//     <>
//     <div>
//       <Counter />

//     </div>
//     </>
//   )
// }
// export default App;

//props children

// import './App.css'
// import Card from "./Component/Card";

// function App(){

//   return(
//     <>
//     <div>
//       <Card>
//       <p>Best LAerning Reasouces for Web Developmen</p>
//       <h4>Learning Raect 1 July</h4>

//       </Card >
//       <Card children="ram">
//         <p>Hlo Friwends</p>
//       </Card>

//     </div>
//     </>
//   )
// }
// export default App;

//textInput chnage function

// import './App.css'
// import TextChnage from "./Component/TextChnage";

// function App(){

//   return(
//     <>
//     <div>
//     <TextChnage/>

//     </div>
//     </>
//   )
// }
// export default App;

//StateLifting concept in react
// import './App.css'
// import TextChnage from "./Component/TextChnage";
// import StateLifting from "./Component/StateLifting";

// function App(){
//create state
//manage state
//change state
//all state me sync data
//  const[name,setName]=useState('');

//   return(
//     <>
//     <div>
//     <StateLifting title="card1" name={name} setName={setName} />
//      <StateLifting title="card2" name={name} setName={setName} />
//     {/* <p>i am inside the parent component and value of name is:{name}</p>
//    */}
//     </div>
//     </>
//   )
// }
// export default App;

//Learning conditional rendering

// import LoginBtn from "./Component/LoginBtn";
// import LogoutBtn from "./Component/LogoutBtn";
// import './App.css'
// function App(){
//     const[isLoggedIn,setLoggedIn]=useState(true);

//if-else rendering

// if(isLoggedIn){
//   return(
//     <LogoutBtn/>
//   )
// }else{
//   <LoginBtn/>
// }

//terneray rendering

// return(
//   <div>
//     {isLoggedIn?<LogoutBtn/>:<LoginBtn/>}
//   </div>
// )

//logical rendering

// return(
//   <div><h1>Learning Rendering condtional</h1>
//   <div>
//     {isLoggedIn && <LogoutBtn/>}
//   </div>

//   </div>

// )

// }
// export default App;

//event Handing

import React, { Component } from "react";

function App() {
  function handelerMessage() {
    alert("Button is clicked me");
  }
  function onMouseOver() {
    alert("mouse over");
  }
  function handleInputChange(e) {
    e.preventDefault();
    alert("input chnage kar de");
  }
  return (
    <div>
      <button onClick={handelerMessage}>Clicked btn</button>
      <p onMouseOver={onMouseOver}>Learning event handling</p>

      <form action="">
        <input
          type="text"
          placeholder="enter any input"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
