import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { tasks as data } from "./data/tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;
