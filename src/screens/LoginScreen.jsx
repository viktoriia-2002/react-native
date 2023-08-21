

import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ onChange, value }) => {
  return (
    <View >
      <Button
      title="Press me"
      color="#f194ff"
      onPress={() => Alert.alert("Button with adjusted color pressed")}
    />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputWrapper: {
    // maxWidth: 343,
    // width: "100%",
    width: "90%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 2,
    marginBottom: 16,
  },

});






