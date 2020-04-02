import React, { useState, useEffect, useMemo, useCallback } from "react";
import CustomToggleComponent from "./CustomToggleComponent";
import "./App.css";

function App() {
  var [count, setCount] = useState(0);
  var [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("This is Equivalent of componenet will update!");
  });

  useEffect(() => {
    console.log("This isEquivalent of componenet will mount!");
  }, []);

  useEffect(() => {
    console.log("This is will run only after the value of Primary Flag changes! Micro-managing component should update and component will mount!");
  }, [flag]);

  useEffect(() => {
    return () => {
      console.log("This is equivalent of component will unmount! ");
    };
  });

  const inceaseCount=()=> {
    setCount(count + 1);
  }

  const toggleFlag =useCallback(()=>{
    console.log("Method is cached so shallow comparison is prevented. The component doesnt re-render because the method doesnt get created!")
    setFlag(!flag);
  },[flag]);

  const memoisedComponent = useMemo(() => {
    console.log("This is equivalent of componentShouldUpdate but an advanced version of it.")
    return <CustomToggleComponent toggleFlag={toggleFlag}/>;
  }, [toggleFlag]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Learning React Hooks</p>
        <p>Please open console to check useEffect outcome!</p>
        <p>Count: {count}</p>
        <p>Primary Flag: {"" + flag}</p>

        <button onClick={inceaseCount}>Increment</button>
        <br />
        {memoisedComponent}
        <br />
        <button onClick={toggleFlag }>
          Toggle Primary Flag
        </button>
      </header>
    </div>
  );
}

export default App;
