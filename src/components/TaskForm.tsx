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

const TaskForm = () => {
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
    // Handle form submission logic here
    console.log("Task added:", { title, description });

    // Clear the form
    setTitle("");
    setDescription("");
  };

  return (
    <View style={styles.container}>
      {error.length > 0 && <Text style={styles.error}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Task title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Description (optional)"
        multiline
        value={description}
        onChangeText={(text) => setDescription(text)}
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
    backgroundColor: colors.inputBackground,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    padding: spacing.md,
    borderRadius: 10,
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
    borderRadius: 10,
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
