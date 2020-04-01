import  { useState } from "react";

const useToggle=(defaultState=false)=> {
    const [state, setState]=useState(defaultState);
    const flipState= ()=>{
        setState(!state)
    }
    return [state,flipState]
  }

  export default useToggle;