import React, { createContext, useContext, useState } from "react";
import { Task } from "../types/tasks";

interface TaskContextType {
  tasks: Task[];
  addTask: (task: { title: string; description: string }) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: { title: string; description: string }) => {
    setTasks((prev) => [...prev, { ...task, id: Date.now().toString() }]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used inside a TaskProvider");
  }
  return context;
};
