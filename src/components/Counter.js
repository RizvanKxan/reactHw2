import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(count +1)  }>+</button>
      <button onClick={() =>  setCount(count -1) }>-</button>
    </>
  );
};

export default Counter;
