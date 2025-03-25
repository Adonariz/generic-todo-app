import { createContext, ReactNode, useReducer } from "react";
import reducer, { TaskState } from "./reducer";
import { Task } from "@shared/tasks";
import { ActionTypes } from "./actions";

const initialState: TaskState = {
  tasks: [],
};

interface ProviderProps {
  children: ReactNode;
}

interface TaskContextValue extends TaskState {
  addTask: (task: Task) => void;
}

export const TaskContext = createContext<TaskContextValue>({
  ...initialState,
  addTask: () => {},
});

export const TaskContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: TaskContextValue = {
    ...state,
    addTask: (task) => {
      dispatch({ type: ActionTypes.ADD_TASK, payload: [...state.tasks, task] });
    },
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
