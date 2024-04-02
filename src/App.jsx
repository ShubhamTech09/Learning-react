import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Poonam");
  useEffect(() => {
    document.title = `you have clicked ${counter} times`; //no react code
  
  },[counter]);

  //syntax const [statevar,updatestate] =useState(initialValue)

  const increment = () => {
    setCounter((prev) => prev + 1);

    console.log(counter, "counter");
    setName("Nidhi");
  };

  return (
    <>
      <h1>Counter :{counter}</h1>
      <h1>Counter without state: </h1>
      <h1>Name is : {name}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;

// `` string template  string + var execute
// string1 + counter + string 2
