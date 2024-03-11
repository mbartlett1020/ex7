import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
  View,
  Platform,
} from "react-native";
import { styles } from "./styles";

export default function App() {
  const [tasks, setTasks] = useState([
    { key: "1", completed: false, description: "Task 1" },
    { key: "2", completed: false, description: "Task 2" },
    { key: "3", completed: false, description: "Task 3" },
  ]);
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.key === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <CheckBox
        value={item.completed}
        onValueChange={() => handleTaskCompletion(item.key)}
      />
      <Text
        style={
          item.completed
            ? [styles.completedText, { marginLeft: 8 }]
            : { marginLeft: 8 }
        }
      >
        {item.description}
      </Text>
    </View>
  );

  const handleAddTask = () => {
    if (newTaskDescription.trim()) {
      const newTask = {
        key: `${tasks.length + 1}`,
        completed: false,
        description: newTaskDescription,
      };
      setTasks([...tasks, newTask]);
      setNewTaskDescription(""); // Clear the input after adding a task
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskListContainer}>
        <FlatList data={tasks} renderItem={renderItem} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={newTaskDescription}
          onChangeText={(text) => setNewTaskDescription(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
