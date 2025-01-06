import { useState } from "react";   
function Cat() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sathish");
  return (
    <div class="cat">
      <h1>Count: {count}</h1><br />
      <button onClick={() => setCount(count + 1)}>Increment</button><br />
      <button onClick={() => setCount(count - 1)}>Decrement</button><br />
      <label>Name</label><br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <h1>Name: {name}</h1><br />
  </div>

  );
}
export default Cat;