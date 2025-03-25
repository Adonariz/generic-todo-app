import { ReactNode, useReducer } from "react";
import reducer from "./reducer";
import { ActionTypes } from "./actions";
import { TaskContext, TaskContextValue, TaskInitialState } from "./TaskContext";

interface ProviderProps {
  children: ReactNode;
}

/**
 * Провайдер контекста задач
 */
export const TaskContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, TaskInitialState);

  const value: TaskContextValue = {
    ...state,
    // Добавление задачи
    addTask: (task) => {
      dispatch({ type: ActionTypes.ADD_TASK, payload: [...state.tasks, task] });
    },
    // Переключение статуса задачи
    toggleTaskStatus: (id) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }

        return task;
      });

      dispatch({ type: ActionTypes.TOGGLE_TASK_STATUS, payload: updatedTasks });
    },
    // Удаление задачи
    deleteTask: (id) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);

      dispatch({ type: ActionTypes.DELETE_TASK, payload: updatedTasks });
    },
    // Установка фильтра задач
    setFilter: (filter) => {
      dispatch({ type: ActionTypes.SET_TASK_FILTER, payload: filter });
    },
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
