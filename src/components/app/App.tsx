import AddNewTask from "@components/add-new-task/AddNewTask";
import FilterTabs from "@components/filter-tabs/FilterTabs";
import TasksList from "@components/tasks-list/TasksList";
import { TaskContextProvider } from "@context/tasks/TaskContextProvider";

function App() {
  return (
    <TaskContextProvider>
      <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300">
        <div className="m-auto flex min-h-[600px] w-[600px] flex-col gap-4 rounded-2xl bg-white p-4 shadow-xl">
          <h1 className="text-center text-2xl font-bold">My tasks</h1>

          <AddNewTask />

          <FilterTabs />

          <TasksList />
        </div>
      </div>
    </TaskContextProvider>
  );
}

export default App;
