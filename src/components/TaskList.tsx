import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";
import { Task } from "../types/tasks";
import { spacing } from "../styles/spacing";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacing.md,
  },
});
