import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
const App = () => {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container bg-yellow-100 mx-auto p-10">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
};

export default App;
