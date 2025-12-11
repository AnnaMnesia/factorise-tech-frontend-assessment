import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { typography } from "../styles/typography";
import TaskForm from "../components/TaskForm";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header: top 1/3 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Tasks</Text>
      </View>
      {/* Body:2/3 */}
      <View style={styles.body}>
        <TaskForm />
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
