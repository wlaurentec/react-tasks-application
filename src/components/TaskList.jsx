import TaskCard from "./TaskCard";
function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <div>No hay tareas aun</div>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
