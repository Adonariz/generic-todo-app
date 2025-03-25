function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300">
      <div className="m-auto flex min-h-[600px] w-[600px] flex-col gap-4 rounded-2xl bg-white p-4 shadow-xl">
        <h1 className="text-center text-2xl font-bold">My tasks</h1>

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
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <button className="underline">All</button>
          <button className="text-gray-300">Active</button>
          <button className="text-gray-300">Done</button>
        </div>

        <ul className="flex flex-col">
          <li className="flex items-start justify-between gap-4 rounded-sm bg-white py-2">
            <label className="my-auto flex gap-x-2 select-none">
              <input className="peer hidden" type="checkbox" name="status" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mt-1 hidden size-6 shrink-0 text-green-500 peer-checked:block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mt-1 size-6 shrink-0 text-gray-400 peer-checked:hidden"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <span className="text-lg peer-checked:text-gray-400 peer-checked:line-through">
                Buy so much groceries you can't even imagine the sheer amount of
                groceries you're going to buy. It's going to be so much that you
                won't even be able to carry it all. You're going to need an
                industrial truck to deliver them all.
              </span>
            </label>

            <div className="flex gap-4">
              <button className="rounded-sm bg-gray-400 p-2 text-white transition-colors hover:bg-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
