import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { spacing } from "../styles/spacing";
import TaskItem from "./TaskItem";
import { Task } from "../types/tasks";

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
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spacing.lg,
  },
});
