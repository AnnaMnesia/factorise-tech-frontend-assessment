import React from "react";
import { render } from "@testing-library/react-native";
import TaskList from "../src/components/TaskList";

describe("TaskList", () => {
  it("renders the correct number of tasks", () => {
    const tasks = [
      { id: "1", title: "A", description: "aaa" },
      { id: "2", title: "B", description: "bbb" },
    ];

    const { getAllByTestId } = render(<TaskList tasks={tasks} />);

    const items = getAllByTestId("task-item");
    expect(items.length).toBe(2);
  });

  it("renders nothing when task list is empty", () => {
    const { queryAllByTestId } = render(<TaskList tasks={[]} />);

    const items = queryAllByTestId("task-item");
    expect(items.length).toBe(0);
  });
});
