import { createContext } from "react";
import { TaskState } from "./reducer";
import { Task } from "@shared/tasks";

export const TaskInitialState: TaskState = {
  tasks: [],
};

export interface TaskContextValue extends TaskState {
  addTask: (task: Task) => void;
  toggleTaskStatus: (id: number) => void;
  deleteTask: (id: number) => void;
}

export const TaskContext = createContext<TaskContextValue>({
  ...TaskInitialState,
  addTask: () => {},
  toggleTaskStatus: () => {},
  deleteTask: () => {},
});
