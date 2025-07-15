import Input from "@/component/input";
import Task from "@/component/Task";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, View } from "react-native";

type TaskType = {
  id: string;
  text: string;
  completed: boolean;
};

type TasksMap = {
  [key: string]: TaskType;
};
export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<TasksMap>({
    "1": { id: "1", text: "todo list 1", completed: false },
    "2": { id: "2", text: "todo list 2", completed: false },
    "3": { id: "3", text: "todo list 3", completed: false },
    "4": { id: "4", text: "todo list 4", completed: false },
    "5": { id: "5", text: "todo list 5", completed: false },
  });

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject: TasksMap = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask("");
    setTasks({ ...tasks, ...newTaskObject });
  };

  const _deleteTask = (id: string) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  const _handleTextChange = (text: string) => {
    setNewTask(text);
  };
  const _toggleTask = (id: string) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]["completed"] = !currentTasks[id]["completed"];
    setTasks(currentTasks);
  };
  const _updateTask = (item: TaskType) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    setTasks(currentTasks);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Input // UserInput으로 변경
        value={newTask}
        onChangeText={_handleTextChange}
        onSubmitEditing={_addTask}
      />
      <Button
        title="enter"
        onPress={() => {
          _addTask();
        }}
      />
      <ScrollView>
        {Object.values(tasks)
          .reverse()
          .map((item) => (
            <Task
              key={item.id}
              text={item.text}
              id={item.id}
              completed={item.completed}
              deleteTask={() => _deleteTask(item.id)}
              toggleTask={() => _toggleTask(item.id)}
              updateTask={(item) => _updateTask(item)}
            />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
