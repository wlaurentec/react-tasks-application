import { useState } from "react";
const TaskForm = () => {
  
  const [title, setTitle] = useState("");

  const handSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  }
  return (
    <form onSubmit={handSubmit}>
      <input placeholder="Escribe tu tarea"
      onChange={(e) => setTitle(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

export default TaskForm