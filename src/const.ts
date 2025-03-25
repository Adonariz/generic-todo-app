/**
 * Возможные значения фильтра
 */
export const TaskFilterValue = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

/**
 * Конфигурация фильтра
 */
export const TaskFilterConfig = {
  [TaskFilterValue.ALL]: {
    label: "All",
    filter: TaskFilterValue.ALL,
  },
  [TaskFilterValue.ACTIVE]: {
    label: "Active",
    filter: TaskFilterValue.ACTIVE,
  },
  [TaskFilterValue.COMPLETED]: {
    label: "Done",
    filter: TaskFilterValue.COMPLETED,
  },
};
