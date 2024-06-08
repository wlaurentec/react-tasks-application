const TaskCard = ({ task, deleteTask  }) => {

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={ () => deleteTask(task.id) }>Eliminar tarea</button>
    </div>
  );
};

export default TaskCard;
  