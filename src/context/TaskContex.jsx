import { createContext } from "react";

export const TaskContext = createContext();
export const TaskContexProvider = (props) => {
  const x = 20;
  return (
    <TaskContext.Provider value={x}>
      {props.children}
    </TaskContext.Provider>
  )
}
 