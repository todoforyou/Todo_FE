import React from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TextInputProps,
} from "react-native";

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
} & TextInputProps;

const Input = ({
  value,
  onChangeText,
  onSubmitEditing,
  ...rest
}: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      placeholder="+ Add a task"
      maxLength={50}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get("window").width - 15,
    fontSize: 20,
    backgroundColor: "#f1f3f5",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 8,
    alignItems: "center",
  },
});

export default Input;
