import { Task, TaskFilter } from "@shared/tasks";
import { ActionTypes, TaskAction } from "./actions";

/**
 * Состояние задач
 */
export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
}

/**
 * Редьюсер для управления задачами
 */
export default function reducer(state: TaskState, action: TaskAction) {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return { ...state, tasks: action.payload };
    case ActionTypes.TOGGLE_TASK_STATUS:
      return { ...state, tasks: action.payload };
    case ActionTypes.DELETE_TASK:
      return { ...state, tasks: action.payload };
    case ActionTypes.SET_TASK_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
