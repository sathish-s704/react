import React,{useState} from "react";
function    Usestate(){
    let[count, setCount] = useState("sathish");

    let Increment = () => {
        console.log(count);
    }

    
  return(
    <div>    
        <h1>my name is:{count}</h1>
        <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />

        <button onClick={Increment}>submit</button>  
    </div>
  )
}
export default Usestate;