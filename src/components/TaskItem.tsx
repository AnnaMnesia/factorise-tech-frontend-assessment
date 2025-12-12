import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>

      {task.description ? (
        <Text style={styles.description}>{task.description}</Text>
      ) : null}
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.foreground,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderRadius: 20,
    ...shadows.soft,
  },
  title: {
    fontSize: typography.subtitle,
    color: colors.textPrimary,
    fontWeight: "600",
  },
  description: {
    fontSize: typography.body,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
});
