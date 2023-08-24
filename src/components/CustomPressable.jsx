import { View, Pressable, StyleSheet, Text, Alert } from "react-native";

const backgroundColor = "#FF6C00";
const color = (contained) => (contained ? "white" : "black");

const CustomPressable = ({ title, undrlineTitle, contained }) => {
  console.log(contained);

  return (
    <View style={styles.pressableWrapper}>
      <Pressable
        style={contained ? styles.containedButton : styles.button}
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      >
        <Text style={[styles.buttonText, { color: color(contained) }]}>
          {`${title} `}
          <Text style={styles.underlinedButtonText}>{undrlineTitle}</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default CustomPressable;

const styles = StyleSheet.create({
  textWrapper: {
    display: "flex",
  },
  underlinedButtonText: {
    textDecorationLine: "underline",
  },
  pressableWrapper: {
    width: "90%",
  },
  containedButton: {
    backgroundColor,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 27,
  },

  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
  },
});
