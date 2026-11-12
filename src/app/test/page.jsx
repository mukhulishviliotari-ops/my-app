"use client";

import { useState } from "react";

export default function Testpage() {
  
  const [count, setCount] = useState(0);


  const decrementByOne = () =>{
    setCount((value) => value - 1);

    console.log(count);
  }
  return (
    <>
      <h1>Test page</h1>

      <p aria-live="polite">Count: {count}</p>

      <button type="button" onClick={() => setCount((value) => value + 1)}>
        +
      </button>

      <button onClick={decrementByOne}>
        -
      </button>
 
    </>
  );
}