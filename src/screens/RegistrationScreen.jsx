import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomPressable from "../components/CustomPressable";
import { useFonts } from "expo-font";

const isLogin = true; // temporary flag

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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        {isLogin && (
          <Image
            style={styles.userImg}
            source={require("../../assets/images/userImg.png")}
          />
        )}

        <Image
          style={styles.addIcon}
          source={require(isLogin
            ? "../../assets/images/removeIcon.png"
            : "../../assets/images/add.png")}
        />
      </View>

      <Text style={styles.title}>Реєстрація</Text>
      <CustomInput onChange={onChangeLogin} value={login} />
      <CustomInput onChange={onChangeEmail} value={email} />
      <CustomInput onChange={onChangePassword} value={password} />

      <CustomPressable title="Зареєстуватися" />
      {/* <CustomPressable title="Зареєстуватися" undrlineTitle="eeee" contained /> */}
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
    fontFamily: "Roboto-Bold",
    marginBottom: 20,
  },
  imageWrapper: {
    position: "relative",
    width: 120,
  },
  userImg: {
    position: "absolute",
    top: -140,
  },
  addIcon: {
    position: "absolute",
    top: -60,
    right: -10,
  },
});
////////////////

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
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     backgroundColor: "red",
//     overflow: "hidden",
//   },
//   title: {
//     fontSize: 20,
//     fontFamily: "Roboto-Bold",
//     marginBottom: 20,
//   },
// });

// import React, { useState } from "react";
// import { SafeAreaView, StyleSheet, Text, Button, Image } from "react-native";
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
//       <Image
//         style={styles.userImg}
//         source={require("../../assets/images/userImg.png")}
//       />
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
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     backgroundColor: "red",
//     overflow: "hidden",
//   },
//   title: {
//     fontSize: 30,
//     fontFamily: "Roboto-Bold",
//     marginBottom: 20,
//   },

//   userImg: {},
// });
