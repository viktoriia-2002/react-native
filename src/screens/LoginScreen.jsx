// import React from "react";
// import { View, TextInput, StyleSheet } from "react-native";

// const CustomInput = ({ onChange, value }) => {
//   return (
//     <View>
//       <Button
//         title="Press me"
//         color="#f194ff"
//         onPress={() => Alert.alert("Button with adjusted color pressed")}
//       />
//     </View>
//   );
// };

// export default CustomInput;

// const styles = StyleSheet.create({
//   inputWrapper: {
//     width: "90%",
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "#E8E8E8",
//     borderRadius: 2,
//     marginBottom: 16,
//   },
// });

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Button,
  ImageBackground,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomPressable from "../components/CustomPressable";
import image from "../../assets/images/BG.png";
import { useNavigation, useRoute } from "@react-navigation/native";

const isLogged = true;

const LoginScreen = () => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const navigation = useNavigation();

  const { params: { userId } = {} } = useRoute();
  useRoute();

  const handleLoginPress = () => {
    navigation.navigate("Registration");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.registartionWrapper}>
            <Text style={styles.title}>Увійти</Text>

            <CustomInput
              onChange={onChangeEmail}
              value={email}
              placeholder="Адреса електронної пошти"
              autoComplete="email"
            />

            <CustomInput
              onChange={onChangePassword}
              value={password}
              secureTextEntry={true}
              placeholder="Пароль"
              autoComplete="password"
            />
            <CustomPressable title="Увійти" contained />

            <Text style={styles.loginText}>
              Немає акаунту?
              <TouchableWithoutFeedback onPress={handleLoginPress}>
                <Text style={{ textDecorationLine: "underline" }}>
                  Зареєструватися
                </Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  registartionWrapper: {
    flex: 0.6,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    marginBottom: 32,
    marginTop: 32,
  },
  imageWrapper: {
    position: "relative",
    width: 120,
  },
  loginText: {
    color: "#1B4371",
    fontSize: 16,
  },
});

export default LoginScreen;
