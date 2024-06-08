import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContex";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <div>Agregar una tarea</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
