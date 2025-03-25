import { createContext } from "react";
import { TaskState } from "./reducer";
import { Task, TaskFilter } from "@shared/tasks";

/**
 * Начальное состояние задач
 */
export const TaskInitialState: TaskState = {
  tasks: [],
  filter: "all",
};

/**
 * Контекст задач
 */
export interface TaskContextValue extends TaskState {
  addTask: (task: Task) => void;
  toggleTaskStatus: (id: number) => void;
  deleteTask: (id: number) => void;
  setFilter: (filter: TaskFilter) => void;
}

/**
 * Контекст для управления задачами
 */
export const TaskContext = createContext<TaskContextValue>({
  ...TaskInitialState,
  addTask: () => {},
  toggleTaskStatus: () => {},
  deleteTask: () => {},
  setFilter: () => {},
});
