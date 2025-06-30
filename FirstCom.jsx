// FirstCom.js
function FirstCom() {
    // alert(sum())
  return (
    
    <div>
        
    <p>This is FirstCom component</p>
    <Fruit/>
    <Vegitable/>
    </div>
  )
  
}


function Fruit(){
    return (
        <h1>Mango</h1>
    )
}
//component
function Vegitable()
{
    return(
        <h1> Temato</h1>
    )
}
//function component
function sum(){
    return  10+30
}
export default FirstCom;