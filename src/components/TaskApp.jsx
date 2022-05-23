import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Task from "./Task/Task";
import Tasks from "./Tasks/Tasks"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */<TaskHeader />}
      {/* Add Task */<Task/>}
      {/* Tasks */<Tasks />}
    </div>
  );
};

export default TaskApp;
