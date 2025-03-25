import { TaskContext } from "@context/tasks/TasksContext";
import { Task } from "@shared/tasks";
import { ChangeEvent, FormEvent, useContext, useState } from "react";

/**
 * Начальное состояние
 */
const initialFormData: Task = {
  id: 1,
  text: "",
  completed: false,
};

/**
 * Компонент добавления новой задачи
 */
export default function AddNewTask() {
  const { addTask } = useContext(TaskContext);

  const [formData, setFormData] = useState<Task>(initialFormData);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    addTask({
      ...formData,
      id: Date.now(),
    });

    setFormData(initialFormData);
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target;

    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="flex w-full gap-4" onSubmit={handleSubmit}>
      <label className="w-full grow">
        <input
          className="border-black-400 h-10 w-full rounded-sm border border-gray-300 bg-white px-4 py-1 transition-colors outline-none focus-within:border-black hover:border-black"
          name="text"
          type="text"
          onChange={handleChange}
          value={formData.text}
        />
      </label>

      <button
        className="rounded-sm bg-blue-500 px-4 py-2 text-white transition-opacity outline-none hover:opacity-80 focus:opacity-80 active:opacity-50"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>

        <span className="sr-only">Add new task</span>
      </button>
    </form>
  );
}
