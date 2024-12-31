import React,{useState,useEffect,useContext} from "react";
function Usecontext(){
    let[count, setCount] = useState(0);
    let Increment = () => {
        setCount(count + 1);
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}