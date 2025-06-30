function Click(){
    function callFun(){
    alert("function call")
    }
    const fruit=(name)=>{
        alert(name)

    }
function Fruit(name){
 alert(name)

}
    return(
        <div>
            <h1>Event and Function Call</h1>
            <button onClick={callFun}> Click Me</button>
             <button onClick={()=>Fruit("apple")}> Apple</button>
              <button onClick={()=>Fruit("banana")}> Banana</button>
        </div>
    )
}
export default Click;