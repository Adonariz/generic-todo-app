import { useContext } from "react";
import TaskItem from "@components/task-item/TaskItem";
import { TaskContext } from "@context/tasks/TaskContext";
import { TaskFilterValue } from "@src/const";

/**
 * Список задач
 */
export default function TasksList() {
  const { tasks, filter } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case TaskFilterValue.ACTIVE:
        return !task.completed;
      case TaskFilterValue.COMPLETED:
        return task.completed;
      default:
        return true;
    }
  });

  return (
    <ul className="flex flex-col">
      {filteredTasks.length > 0 &&
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)}

      {filteredTasks.length === 0 && (
        <li className="text-center text-gray-300">No tasks to show</li>
      )}
    </ul>
  );
}
