import React from "react";
import { View, Pressable, Button, StyleSheet, Text, Alert } from "react-native";

const CustomButtom = ({ title }) => {
  return (
    // <View >
    <Button
      style={styles.button}
      title={title}
      color="#f194ff"
      onPress={() => Alert.alert("Button with adjusted color pressed")}
    />
    // <Pressable
    //   onPress={() => Alert.alert("Button with adjusted color pressed")}
    // >
    //   <Text>I'm pressable!</Text>
    // </Pressable>
    // </View>
  );
};

export default CustomButtom;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6C00",
    width: "90%",

    // alignItems: "center",
    // justifyContent: "center",
    // paddingVertical: 12,
    // paddingHorizontal: 32,
    // borderRadius: 4,
    // elevation: 3,
    // backgroundColor: "black",
  },
});
