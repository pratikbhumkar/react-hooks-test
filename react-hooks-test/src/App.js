import React, { useState, useEffect } from "react";
import useToggle from './useToggle'
import "./App.css";

function App() {
  const [isVisible, toggleVisible]=useToggle();
  var [count, setCount] = useState(0);
  var [flag, setFlag] = useState(false);

  useEffect(()=>{
    console.log("Equivalent of componenet will update!")
  })

  useEffect(()=>{
    console.log("Equivalent of componenet will mount!")
  },[])

  useEffect(()=>{
    console.log("This is will run only after the value of Flag changes! ")
  },[flag])

  useEffect(()=>{
    return ()=> {
      console.log("This is equivalent of component will unmount! ")
  }
});

  function inceaseCount() {
    var countNumber=count;
    countNumber++;
    setCount(countNumber);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Testing React Hooks</p>
        <p>Please open console to check useEffect outcome!</p>
        <p>Count: {count}</p>
        <p>Flag: {""+flag}</p>
        <p>Custom Toggler Flag: {""+isVisible}</p>
        <button onClick={inceaseCount}>Increment</button>
        <br/>
        <button onClick={toggleVisible}>Toggle Flag from Custom Hooks</button>
        <br/>
        <button onClick={()=>{ 
          var flagValue= !flag;
          setFlag(flagValue);
        }}>Toggle Flag</button>
      </header>
    </div>
  );
}



export default App;
