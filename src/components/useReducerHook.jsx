import { useReducer } from "react"
import React from 'react'
const initialState = 0;

const reducer = (state, action) => {
     if (action === "INCREMENT") {
          return state + 1;
     }
     if (action === "DECREMENT") {
          return state - 1;
     }
     console.log(state, action);
     return state;
};

function useReducerHook() {
     const [state, dispatch] = useReducer(reducer, initialState);
     return (
          <div className="App">
               <h1>{state}</h1>
               <div>
                    <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
                    <button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>
               </div>
          </div>
     );
}

export default useReducerHook;
