import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/screens/RegistrationScreen.jsx";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/BG.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }} // Adjust this to flex: 1
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.registrationContainer}>
            <RegistrationScreen />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  registrationContainer: {
    justifyContent: "flex-end", // Push the RegistrationScreen to the bottom
    flex: 1, // Take up entire available space
    height: 200,
  },
});

export default App;
