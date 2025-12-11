import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import TaskForm from "../components/TaskForm";
import { Task } from "../types/tasks";
import TaskList from "../components/TaskList";

const HomeScreen = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [sortType, setSortType] = useState<"az" | "za" | "newest" | "oldest">(
    "newest"
  );

  const handleAddTask = (task: { title: string; description: string }) => {
    setTasks((prev) => [
      ...prev,
      { ...task, id: Date.now().toString() }, // Generate unique ID
    ]);
  };

  //Bonus: Implement sorting logic based on sortType
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortType === "az") return a.title.localeCompare(b.title);
    if (sortType === "za") return b.title.localeCompare(a.title);
    if (sortType === "newest") return parseInt(b.id) - parseInt(a.id);
    if (sortType === "oldest") return parseInt(a.id) - parseInt(b.id);
    return 0;
  });

  return (
    <View style={styles.container}>
      {/* Header: top 1/3 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Tasks</Text>
      </View>

      {/* Body:2/3 */}
      <View style={styles.body}>
        <TaskForm onAddTask={handleAddTask} />

        {/* Bonus: sorting options */}
        <View style={styles.sortContainer}>
          {/* Show sorting options only if more than one task */}
          {sortedTasks.length > 1 && (
            <View style={styles.sortContainer}>
              {["az", "za", "newest", "oldest"].map((type) => (
                <TouchableOpacity
                  key={type}
                  onPress={() => setSortType(type as any)}
                  style={[
                    styles.sortButton,
                    sortType === type && styles.sortButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.sortButtonText,
                      sortType === type && styles.sortButtonTextActive,
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
        </View>

        <TaskList tasks={sortedTasks} />
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
  // Sorting UI
  sortContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    gap: spacing.xs,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  sortButton: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    backgroundColor: colors.inputBackground,
  },
  sortButtonActive: {
    backgroundColor: colors.primary,
  },
  sortButtonText: {
    color: colors.textPrimary,
    fontSize: typography.small,
  },
  sortButtonTextActive: {
    color: "white",
  },
});

export default HomeScreen;
