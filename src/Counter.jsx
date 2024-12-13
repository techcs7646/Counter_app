import React, { useState } from "react";
import "./Counter.css"; // We'll add styling here

function Counter() {
  // State to hold the count
  const [count, setCount] = useState(0);

  // Handlers for buttons
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>React Counter</h1>
      <div className="counter-display">
        <h2>{count}</h2>
      </div>
      <div className="button-group">
        <button className="btn increment" onClick={increment}>
          +
        </button>
        <button className="btn decrement" onClick={decrement}>
          -
        </button>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;