import { createContext } from "react";

export const TaskContext = createContext();
export const TaskContexProvider = (props) => {
  return (
    <TaskContext.Provider >
      {props.children}
    </TaskContext.Provider>
  )
}
 