import { Task } from "@shared/tasks";

export enum ActionTypes {
  ADD_TASK = "ADD_TASK",
  TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS",
  DELETE_TASK = "DELETE_TASK",
  DELETE_ALL_COMPLETED_TASKS = "DELETE_ALL_COMPLETED_TASKS",
}

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
    };
