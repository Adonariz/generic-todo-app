import { TaskFilterValue } from "@src/const";

/**
 * Структура задачи
 */
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

/**
 * Фильтр задач
 */
export type TaskFilter = (typeof TaskFilterValue)[keyof typeof TaskFilterValue];
