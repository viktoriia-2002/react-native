import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ onChange, value }) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput style={styles.input} onChangeText={onChange} value={value} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputWrapper: {
    width: "90%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 2,
    marginBottom: 16,
  },
  input: {
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
    fontSize: 16,
  },
});
