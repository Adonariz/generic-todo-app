import TaskItem from "@components/task-item/TaskItem";
import { TaskContext } from "@context/tasks/TasksContext";
import { useContext } from "react";

export default function TasksList() {
  const { tasks } = useContext(TaskContext);

  return (
    <ul className="flex flex-col">
      {tasks.length > 0 &&
        tasks.map((task) => <TaskItem key={task.id} task={task} />)}

      {tasks.length === 0 && (
        <li className="text-center text-gray-300">No tasks</li>
      )}
    </ul>
  );
}
