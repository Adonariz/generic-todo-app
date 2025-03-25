import { useContext } from "react";
import { TaskContext } from "@context/tasks/TaskContext";
import { TaskFilterConfig } from "@src/const";

/**
 * Компонент фильтрации задач
 */
export default function FilterTabs() {
  const { filter, setFilter } = useContext(TaskContext);

  return (
    <div className="flex justify-center gap-4">
      {Object.entries(TaskFilterConfig).map(([key, value]) => {
        const classes =
          filter === value.filter
            ? "underline pointer-events-none"
            : "text-gray-300 hover:text-gray-500 transition-colors";

        return (
          <button
            key={key}
            className={classes}
            onClick={() => setFilter(value.filter)}
          >
            {value.label}
          </button>
        );
      })}
    </div>
  );
}
