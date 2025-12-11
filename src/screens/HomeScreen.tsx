import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import TaskForm from "../components/TaskForm";
import { Task } from "../types/tasks";
import TaskList from "../components/TaskList";

const HomeScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (task: { title: string; description: string }) => {
    setTasks((prev) => [...prev, { ...task, id: Date.now().toString() }]);
  };

  return (
    <View style={styles.container}>
      {/* Header: top 1/3 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Tasks</Text>
      </View>
      {/* Body:2/3 */}
      <View style={styles.body}>
        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: colors.backgroundHeader,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: { color: "white", fontSize: typography.header },
  body: {
    flex: 2,
    backgroundColor: colors.backgroundBody,
    padding: spacing.lg,
  },
});

export default HomeScreen;
