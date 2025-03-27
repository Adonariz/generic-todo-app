import { useContext } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TaskContextProvider } from "./TaskContextProvider";
import { TaskContext } from "./TaskContext";

const TestComponent = () => {
  const value = useContext(TaskContext);

  return (
    <>
      <span data-testid="tasks">{value.tasks.length}</span>
      <span data-testid="filter">{value.filter}</span>

      <button
        onClick={() => value.addTask({ id: 1, text: "Test", completed: false })}
        data-testid="add-task-btn"
      >
        Add Task
      </button>
      <button
        onClick={() => value.toggleTaskStatus(1)}
        data-testid="toggle-task-btn"
      >
        Toggle Task
      </button>
      <button onClick={() => value.deleteTask(1)} data-testid="delete-task-btn">
        Delete Task
      </button>
      <button
        onClick={() => value.setFilter("completed")}
        data-testid="set-filter-btn"
      >
        Set Filter
      </button>
    </>
  );
};

/**
 * Здесь описаны тесты для проверки изменения контекста
 */
describe("TaskContextProvider", () => {
  it("should provide initial state", () => {
    render(
      <TaskContextProvider>
        <TestComponent />
      </TaskContextProvider>,
    );

    expect(screen.getByTestId("tasks")).toHaveTextContent("0");
    expect(screen.getByTestId("filter")).toHaveTextContent("all");
  });

  it("should add a task", async () => {
    render(
      <TaskContextProvider>
        <TestComponent />
      </TaskContextProvider>,
    );

    screen.getByTestId("add-task-btn").click();
    await waitFor(() =>
      expect(screen.getByTestId("tasks")).toHaveTextContent("1"),
    );
  });

  it("should toggle task status", async () => {
    render(
      <TaskContextProvider>
        <TestComponent />
      </TaskContextProvider>,
    );

    screen.getByTestId("add-task-btn").click();
    await waitFor(() =>
      expect(screen.getByTestId("tasks")).toHaveTextContent("1"),
    );

    screen.getByTestId("toggle-task-btn").click();
  });

  it("should delete a task", async () => {
    render(
      <TaskContextProvider>
        <TestComponent />
      </TaskContextProvider>,
    );

    screen.getByTestId("add-task-btn").click();
    await waitFor(() =>
      expect(screen.getByTestId("tasks")).toHaveTextContent("1"),
    );

    screen.getByTestId("delete-task-btn").click();
    await waitFor(() =>
      expect(screen.getByTestId("tasks")).toHaveTextContent("0"),
    );
  });

  it("should set filter", async () => {
    render(
      <TaskContextProvider>
        <TestComponent />
      </TaskContextProvider>,
    );

    screen.getByTestId("set-filter-btn").click();

    await waitFor(() => {
      expect(screen.getByTestId("filter")).toHaveTextContent("completed");
    });
  });
});
