import { useContext } from "react";
import { TaskContext } from "../context/TaskContex";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
};

export default TaskCard;
