import { Task } from "@shared/tasks";

export enum ActionTypes {
  ADD_TASK = "ADD_TASK",
  TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS",
  DELETE_TASK = "DELETE_TASK",
  DELETE_ALL_TASKS = "DELETE_ALL_TASKS",
}

export type TaskAction = {
  type: ActionTypes.ADD_TASK;
  payload: Task[];
};
