import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Platform } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomPressable from "../components/CustomPressable";

const isLogged = true; 
const RegistrationScreen = () => {
  const [login, onChangeLogin] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.registartionWrapper}>
        <View style={styles.imageWrapper}>
          {isLogged ? (
            <Image
              style={styles.userImg}
              source={require("../../assets/images/userImg.png")}
            />
          ) : (
            <View style={styles.imageHolder} />
          )}

          <Image
            style={isLogged ? styles.removeIcon : styles.addIcon}
            source={require(isLogged
              ? "../../assets/images/removeIcon.png"
              : "../../assets/images/add.png")}
          />
        </View>

        <Text style={styles.title}>Реєстрація</Text>

        <CustomInput
          onChange={onChangeLogin}
          value={login}
          placeholder="Логін"
          autoComplete="login"
        />

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

        <CustomPressable title="Зареєстуватися" contained />
        <CustomPressable title="Вже є акаунт?" undrlineTitle="Увійти" />
      </View>
    </View>
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
    marginBottom: 40,
    marginTop: 90,
  },
  imageWrapper: {
    position: "relative",
    width: 120,
  },
  userImg: {
    position: "absolute",
    top: -60,
  },
  imageHolder: {
    position: "absolute",
    top: -60,
    backgroundColor: "#F6F6F6",
    height: 120,
    width: 120,
    borderRadius: 16,
  },
  addIcon: {
    position: "absolute",
    top: 15,
    right: -13,
  },
  removeIcon: {
    position: "absolute",
    top: 15,
    right: -20,
  },
});

export default RegistrationScreen;
