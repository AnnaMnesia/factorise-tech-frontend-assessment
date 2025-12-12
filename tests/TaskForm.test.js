import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import TaskForm from "../src/components/TaskForm";

describe("TaskForm", () => {
  it("disables the button when the title is empty", () => {
    const mockFn = jest.fn();

    const { getByTestId } = render(<TaskForm onAddTask={mockFn} />);

    const button = getByTestId("add-task-button");

    expect(button.props.disabled).toBe(true);
  });

  it("enables the button when title is provided", () => {
    const mockFn = jest.fn();

    const { getByTestId, getByPlaceholderText } = render(
      <TaskForm onAddTask={mockFn} />
    );

    fireEvent.changeText(getByPlaceholderText("Task title"), "Hello");

    const button = getByTestId("add-task-button");

    expect(button.props.disabled).toBe(false);
  });

  it("calls onAddTask when form submitted", () => {
    const mockFn = jest.fn();

    const { getByTestId, getByPlaceholderText } = render(
      <TaskForm onAddTask={mockFn} />
    );

    fireEvent.changeText(getByPlaceholderText("Task title"), "Hello");

    const button = getByTestId("add-task-button");
    fireEvent.press(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
