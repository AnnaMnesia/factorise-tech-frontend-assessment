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

  // Live validation whenever title changes
  const handleTitleChange = (text: string) => {
    setTitle(text);
    if (text.trim().length === 0) {
      setError("Task title is required.");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    if (title.trim().length === 0) {
      setError("Task title is required.");
      return;
    }
    // Handle form submission logic here
    onAddTask({ title, description });

    // Clear the form
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <View style={styles.container}>
      {error.length > 0 && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Task title"
        placeholderTextColor={colors.textSecondary}
        value={title}
        onChangeText={handleTitleChange}
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
        disabled={!isValid}
        onPress={handleSubmit}
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
    ...shadows.small,
    backgroundColor: colors.softInputBackground,
    padding: spacing.lg,
    borderRadius: 30,
    marginBottom: spacing.md,
    fontSize: typography.body,
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: "top",
  },
  button: {
    ...shadows.small,
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: typography.subtitle,
  },
  buttonDisabled: {
    backgroundColor: colors.buttonDisabled,
  },
  error: {
    color: colors.error,
    marginBottom: spacing.sm,
    fontSize: typography.small,
  },
});
