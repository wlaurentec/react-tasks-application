import { useState } from "react";
function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button onClick={handleSubmit}>Guardar</button>
    </form>
  );
}

export default TaskForm;
