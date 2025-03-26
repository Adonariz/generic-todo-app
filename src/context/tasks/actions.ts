import { Task, TaskFilter } from "@shared/tasks";

/**
 * Действия для управления задачами
 */
export enum ActionTypes {
  ADD_TASK = "ADD_TASK",
  TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS",
  DELETE_TASK = "DELETE_TASK",
  DELETE_ALL_COMPLETED_TASKS = "DELETE_ALL_COMPLETED_TASKS",
  SET_TASK_FILTER = "SET_TASK_FILTER",
}

/**
 * Типы действий для управления задачами
 */
export type TaskAction =
  | {
      type: ActionTypes.ADD_TASK;
      payload: Task[];
    }
  | {
      type: ActionTypes.TOGGLE_TASK_STATUS;
      payload: Task[];
    }
  | {
      type: ActionTypes.DELETE_TASK;
      payload: Task[];
    }
  | {
      type: ActionTypes.DELETE_ALL_COMPLETED_TASKS;
      payload: Task[];
    }
  | {
      type: ActionTypes.SET_TASK_FILTER;
      payload: TaskFilter;
    };
