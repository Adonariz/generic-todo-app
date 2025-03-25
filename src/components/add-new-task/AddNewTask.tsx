export default function AddNewTask() {
  return (
    <div className="flex w-full gap-4">
      <label className="w-full grow" htmlFor="add-todo">
        <input
          className="border-black-400 h-10 w-full rounded-sm border border-gray-300 bg-white px-4 py-1 transition-colors outline-none focus-within:border-black hover:border-black"
          name="add-todo"
          type="text"
        />
      </label>

      <button className="rounded-sm bg-blue-500 px-4 py-2 text-white transition-opacity outline-none hover:opacity-80 focus:opacity-80 active:opacity-50">
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
      </button>
    </div>
  );
}
