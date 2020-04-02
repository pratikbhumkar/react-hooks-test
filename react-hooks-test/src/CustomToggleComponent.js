import React, { useState } from "react";

const useToggle = (defaultState = false) => {
  
  const [state, setState] = useState(defaultState);
  const flipState = () => {
    setState(!state);
  };
  return [state, flipState];
};

function CustomToggleComponent(props) {
  console.log("CustomToggleComponent is re-rendering");
  const [isVisible, toggleVisible] = useToggle();
  return (
    <React.Fragment>
      <p>Custom Toggler Flag: {"" + isVisible}</p>
      <button onClick={toggleVisible}>Toggle Custom Flag from Custom Hooks</button>
      <br />
      <button onClick={props.toggleFlag}>Toggle Primary Flag from Custom Hooks Passed on method</button>
    </React.Fragment>
  );
}

export default CustomToggleComponent;
