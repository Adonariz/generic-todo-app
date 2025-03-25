import { ReactNode, useReducer } from "react";
import reducer from "./reducer";
import { ActionTypes } from "./actions";
import { TaskContext, TaskContextValue, TaskInitialState } from "./TaskContext";

interface ProviderProps {
  children: ReactNode;
}

export const TaskContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, TaskInitialState);

  const value: TaskContextValue = {
    ...state,
    addTask: (task) => {
      dispatch({ type: ActionTypes.ADD_TASK, payload: [...state.tasks, task] });
    },
    toggleTaskStatus: (id) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }

        return task;
      });

      dispatch({ type: ActionTypes.TOGGLE_TASK_STATUS, payload: updatedTasks });
    },
    deleteTask: (id) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);

      dispatch({ type: ActionTypes.DELETE_TASK, payload: updatedTasks });
    },
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
