import { Task } from "@shared/tasks";
import { ActionTypes, TaskAction } from "./actions";

export interface TaskState {
  tasks: Task[];
}

export default function reducer(state: TaskState, action: TaskAction) {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return { ...state, tasks: action.payload };
    case ActionTypes.TOGGLE_TASK_STATUS:
      return { ...state, tasks: action.payload };
    case ActionTypes.DELETE_TASK:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
}
