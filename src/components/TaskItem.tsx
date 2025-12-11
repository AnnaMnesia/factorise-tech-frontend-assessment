import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Task } from "../types/tasks";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import { shadows } from "../styles/shadows";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>

      {task.description ? (
        <Text style={styles.description}>{task.description}</Text>
      ) : null}
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    ...shadows.small,
    backgroundColor: colors.inputBackground,
    padding: spacing.md,
    borderRadius: 20,
    marginBottom: spacing.md,
    borderColor: colors.inputBorder,
  },
  title: {
    fontSize: typography.subtitle,
    color: colors.textPrimary,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: typography.body,
    color: colors.textSecondary,
  },
});
