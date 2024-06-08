import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContex";
const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);
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
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4"
    onSubmit={handSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">¡Empieza a crea tu tarea</h1>
      <input
        className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe tu tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <textarea
        className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe una descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
      className="bg-indigo-500 px-3 py-1 text-white"
      >Guardar</button>
    </form>
    </div>
  );
};

export default TaskForm;
