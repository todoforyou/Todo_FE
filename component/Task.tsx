import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { images } from "../images";
import IconButton from "./IconButton";

type TaskType = {
  id: string;
  text: string;
  completed: boolean;
};

type taskprops = {
  id: string;
  text: string;
  deleteTask: () => void;
  toggleTask: () => void;
  completed: boolean;
  updateTask: (item: TaskType) => void;
};

const Task = ({
  id,
  text,
  deleteTask,
  toggleTask,
  completed,
  updateTask,
}: taskprops) => {
  const [isEditing, setIsEditing] = useState(false);
  const [thisText, setThisText] = useState(text);

  const _handleUpdateButtonPress = () => {
    setIsEditing(true);
  };

  const _onSubmitEditing = () => {
    setIsEditing(false);
    updateTask({ id, text: thisText, completed });
  };

  return (
    <View style={styles.container}>
      <IconButton
        type={completed ? images.completed : images.uncompleted}
        id={id}
        onPressOut={toggleTask}
      />
      {isEditing ? (
        <TextInput
          value={thisText}
          onChangeText={setThisText}
          onSubmitEditing={_onSubmitEditing}
          style={styles.input}
        />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
      {!completed && (
        <IconButton type={images.edit} onPressOut={_handleUpdateButtonPress} />
      )}
      <IconButton type={images.delete} onPressOut={deleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 15,
    marginLeft: 7,
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    flex: 1,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 4,
  },
  text: {
    fontSize: 20,
    flex: 1,
  },
});

export default Task;
