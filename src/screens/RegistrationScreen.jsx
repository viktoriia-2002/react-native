// import React, { useState } from "react";
// import { SafeAreaView, StyleSheet, Text, Button } from "react-native";
// import CustomInput from "../components/CustomInput";
// import CustomPressable from "../components/CustomPressable";
// import { useFonts } from "expo-font";

// const RegistrationScreen = () => {
//   const [login, onChangeLogin] = useState("Логін");
//   const [email, onChangeEmail] = useState("Адреса електронної пошти");
//   const [password, onChangePassword] = useState("Пароль");
//   const [fontsLoaded] = useFonts({
//     "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Реєстрація</Text>
//       <CustomInput onChange={onChangeLogin} value={login} />
//       <CustomInput onChange={onChangeEmail} value={email} />
//       <CustomInput onChange={onChangePassword} value={password} />

//       <CustomPressable title="Зареєстуватися" />
//       {/* <CustomPressable title="Зареєстуватися" undrlineTitle="eeee" contained /> */}
//     </SafeAreaView>
//   );
// };

// export default RegistrationScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontFamily: "Roboto-Bold",
//     marginBottom: 20,
//   },
// });
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, Button } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomPressable from "../components/CustomPressable";
import { useFonts } from "expo-font";

const RegistrationScreen = () => {
  const [login, onChangeLogin] = useState("Логін");
  const [email, onChangeEmail] = useState("Адреса електронної пошти");
  const [password, onChangePassword] = useState("Пароль");
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const customTextStyle = { fontFamily: "Roboto-Bold" };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, customTextStyle]}>Реєстрація</Text>
      <CustomInput
        onChange={onChangeLogin}
        value={login}
        customTextStyle={customTextStyle}
      />
      <CustomInput
        onChange={onChangeEmail}
        value={email}
        customTextStyle={customTextStyle}
      />
      <CustomInput
        onChange={onChangePassword}
        value={password}
        customTextStyle={customTextStyle}
      />

      <CustomPressable title="Зареєстуватися" />
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
    marginBottom: 20,
  },
});
