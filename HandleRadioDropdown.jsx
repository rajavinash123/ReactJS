import { useState } from "react";

function HandleRadioDropdown() {
  const [gender, setGender] = useState("fimale");
  const[city,setCity]=useState('jhjha')
  return (
    <div>
      <h1>Leaning Handle Readio and DrowDown</h1>
      <h4>Select Gender</h4>
      <form action="">
        <input
          value={"male"}
          checked={gender == "male"}
          onChange={(event) => setGender(event.target.value)}
          type="radio"
          name="gender"
          id="Male"
        />
        <label htmlFor="Male">Male</label>

        <input
          value={"fimale"}
          checked={gender == "fimale"}
          onChange={(event) => setGender(event.target.value)}
          type="radio"
          name="gender"
          id="Famile"
        />
        <label htmlFor="fimale">Fimale</label>
      </form>
      <h1>selsecte value:{gender}</h1>
      <br />
      <h1>select city</h1>
      <select onChange={(event)=>setCity(event.target.value)} defaultValue={"jhajha"}>
        <option   value="noida">noida</option>
        <option value="jhajha">jhajha</option>
        <option value="jamui">jamui</option>
      </select>
      <h2>Selected city:{city}</h2>
    </div>
  );
}
export default HandleRadioDropdown;
