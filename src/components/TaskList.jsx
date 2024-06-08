import TaskCard from "./TaskCard";
function TaskList({ tasks, deleteTask }) {
  
  if (tasks.length === 0) {
    return <div>Agregar una tarea</div>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
