import { tasks as data} from "./tasks";
import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, [ ]);

  if (tasks.length === 0) {
    return <div>No tasks</div>;
  }

  return (
  <div>
    {tasks.map((task, ) => (
      <div key = {task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
    ))}
  </div>
  )
}

export default TaskList;
