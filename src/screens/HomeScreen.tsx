import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
// import { Task } from "../types/tasks";
import { shadows } from "../styles/shadows";
import { useTasks } from "../context/TaskContext";

const HomeScreen = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const { tasks, addTask } = useTasks(); // global tasks + addTask function from context
  const [sortType, setSortType] = useState<"az" | "za" | "newest" | "oldest">(
    "newest"
  );

  const handleAddTask = (task: { title: string; description: string }) => {
    addTask(task);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortType === "az") return a.title.localeCompare(b.title);
    if (sortType === "za") return b.title.localeCompare(a.title);
    if (sortType === "newest") return Number(b.id) - Number(a.id);
    if (sortType === "oldest") return Number(a.id) - Number(b.id);
    return 0;
  });

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Manage{"\n"}your tasks✏️</Text>
      </View>

      {/* BODY */}
      <View style={styles.body}>
        <TaskForm onAddTask={handleAddTask} />

        {tasks.length > 1 && (
          <View style={styles.sortContainer}>
            {["az", "za", "newest", "oldest"].map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.sortButton,
                  sortType === type && styles.sortButtonActive,
                ]}
                onPress={() => setSortType(type as any)}
              >
                <Text
                  style={[
                    styles.sortText,
                    sortType === type && styles.sortTextActive,
                  ]}
                >
                  {type === "az" && "A–Z"}
                  {type === "za" && "Z–A"}
                  {type === "newest" && "Newest"}
                  {type === "oldest" && "Oldest"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TaskList tasks={sortedTasks} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primary },

  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: colors.background,
    padding: spacing.lg,
    ...shadows.soft,
  },

  headerText: {
    fontSize: typography.mainHeader,
    lineHeight: typography.mainHeader * 0.94,
    color: colors.textPrimary,
    fontWeight: "700",
  },

  body: {
    flex: 2,
    padding: spacing.lg,
    backgroundColor: colors.background,
  },

  sortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.lg,
  },

  sortButton: {
    backgroundColor: colors.foreground,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    ...shadows.soft,
  },

  sortButtonActive: {
    backgroundColor: colors.primary,
  },

  sortText: {
    fontSize: typography.small,
    color: colors.textPrimary,
  },

  sortTextActive: {
    color: "white",
  },
});
