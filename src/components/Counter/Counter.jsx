import React from "react";
import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
const [count, setCounter]=useState(0)
  const increment=(value)=>{
    setCounter(count+value)
  }
  // const dicrement=(value)=>{
  //   setCounter(count-value)
  // }
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>increment(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button  onClick={()=>increment(-1)}data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
