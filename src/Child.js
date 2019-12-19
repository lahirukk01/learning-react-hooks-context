import React, { useContext } from "react";
import AppContext from "./AppContext";

const Child = props => {
  const { count, handleIncrementCount, handleDecrementCount } = useContext(
    AppContext
  );

  return (
    <div>
      <h2>This is child component</h2>
      <h4>Count is {count}</h4>
      <button onClick={handleIncrementCount}>Increment</button>
      <button onClick={handleDecrementCount}>Decrement</button>
    </div>
  );
};

export default Child;
