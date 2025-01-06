import React,{useState,useRef} from "react";    
function UseRef() {
  let[count, setCount] = useState(0);
  let countRef = useRef(0);

  let Increment = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;

   console.log("State: ", count);
    console.log("Ref: ", countRef.current);
  }
  return(
    <div>
      <h1>Count: {count}</h1>
      <h1>Ref: {countRef.current}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}
export default UseRef;  