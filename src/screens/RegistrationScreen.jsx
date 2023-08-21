import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, Button } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButtom from "../components/CustomButton";

const RegistrationScreen = () => {
  const [login, onChangeLogin] = useState("Логін");
  const [email, onChangeEmail] = useState("Адреса електронної пошти");
  const [password, onChangePassword] = useState("Пароль");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <CustomInput onChange={onChangeLogin} value={login} />
      <CustomInput onChange={onChangeEmail} value={email} />
      <CustomInput onChange={onChangePassword} value={password} />
      {/* <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      /> */}
      <CustomButtom title="Press me" />
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
