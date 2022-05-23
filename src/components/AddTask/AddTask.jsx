import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const[ Itemsinput,setItemsinput]=useState('')
  const[ Items,setItems]=useState([])
  const items=(event)=>{
    setItemsinput(event.target.value)
  }
  const Listitems=()=>{
    setItems((olditems)=>{
      return [...olditems,Itemsinput]
    })
    setItemsinput("");
  }

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add task" onChange={items} value={Itemsinput}/>
      <button data-cy="add-task-button" onClick={Listitems}>+</button>
  

      <div>
        {
        
        Items.map(function (Item,index) {
          return <AddTask text={Item} Key={index} id={index}
         
           />
        })
        
        }
        
      </div>
    </div>

    
  );
};

export default AddTask;
