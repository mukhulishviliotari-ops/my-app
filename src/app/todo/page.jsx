"use client";

import styles from "./page.module.css";

const [task, setTask] = useState("");
const [taskArray, setTaskArray] = useState([]);


// const addTask = () => {
//     setTaskArray([...taskArray, task]);
//     setTask("");
// }

const Todo = () => {
  return (
    <div className={styles.todoCont}>
      <input type="text" id="taskInput" onChange={(e) => setTask(e.target.value)} />

      <button onClick={addTask}>Add Task</button>

      {/* <ol>
        <li>Task </li>
        <li>Task </li>
        <li>Task </li>
        <li>Task </li>
      </ol> */}
    </div>
  );
};

export default Todo;