import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContex";
const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const valor = useContext(TaskContext)
  console.log(valor);

  const handSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handSubmit}>
      <input
        placeholder="Escribe tu tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <textarea
        placeholder="Escribe una descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
};

export default TaskForm;
