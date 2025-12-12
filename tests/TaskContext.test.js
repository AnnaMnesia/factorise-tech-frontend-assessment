import React from "react";
import { renderHook, act } from "@testing-library/react-native";
import { TaskProvider, useTasks } from "../src/context/TaskContext";

describe("TaskContext", () => {
  it("adds a task correctly", () => {
    const wrapper = ({ children }) => <TaskProvider>{children}</TaskProvider>;

    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask({
        title: "New Task",
        description: "Test desc",
      });
    });

    expect(result.current.tasks.length).toBe(1);
    expect(result.current.tasks[0].title).toBe("New Task");
  });
});
