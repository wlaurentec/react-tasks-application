import TaskCard from "./TaskCard";
const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) {
    return <div>No hay tareas aun</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard deleteTask={deleteTask} key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
