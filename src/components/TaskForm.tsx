import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { spacing } from "../styles/spacing";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import { shadows } from "../styles/shadows";

interface TaskFormProps {
  onAddTask: (task: { title: string; description: string }) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const isValid = title.trim().length > 0;

  const handleSubmit = () => {
    if (!isValid) {
      setError("Task title is required.");
      return;
    }

    setError("");
    onAddTask({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      {error.length > 0 && <Text style={styles.error}>{error}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Task title"
        placeholderTextColor={colors.textSecondary}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Description (optional)"
        placeholderTextColor={colors.textSecondary}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!isValid}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskForm;

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
  },

  input: {
    backgroundColor: colors.foreground,
    padding: spacing.lg,
    borderRadius: 30,
    marginBottom: spacing.md,
    fontSize: typography.body,
    color: colors.textPrimary,

    // Soft shadow
    ...shadows.soft,
  },

  descriptionInput: {
    height: 80,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: 30,
    alignItems: "center",
    ...shadows.soft,
  },

  buttonDisabled: {
    backgroundColor: colors.borderDark,
  },

  buttonText: {
    color: "white",
    fontSize: typography.subtitle,
  },

  error: {
    color: colors.error,
    marginBottom: spacing.sm,
    fontSize: typography.small,
  },
});
