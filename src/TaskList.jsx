import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";
function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  if (data.length === 0) {
    return <div>No hay tareas aun</div>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
