import React, { useState } from "react";

const useToggle = (defaultState = false) => {
  
  const [state, setState] = useState(defaultState);
  const flipState = () => {
    setState(!state);
  };
  return [state, flipState];
};

function CustomToggleComponent() {
  console.log("This is re-rendering");
  const [isVisible, toggleVisible] = useToggle();
  return (
    <React.Fragment>
      <p>Custom Toggler Flag: {"" + isVisible}</p>
      <button onClick={toggleVisible}>Toggle Flag from Custom Hooks</button>
    </React.Fragment>
  );
}

export default CustomToggleComponent;
