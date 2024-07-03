import { useState } from "react";
function TaskForm() {
  const [title, setTitle] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  }


  return (
    <form>
      <input placeholder="Escribe tu tarea" 
      onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Guardar</button>
    </form>
  );
}

export default TaskForm;
