// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   Image,
//   View,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Button,
//   ImageBackground,
// } from "react-native";
// import CustomInput from "../components/CustomInput";
// import CustomPressable from "../components/CustomPressable";
// import image from "../../assets/images/BG.png";
// import { useNavigation } from "@react-navigation/native";

// const isLogged = true;

// const RegistrationScreen = () => {
//   const [login, onChangeLogin] = useState("");
//   const [email, onChangeEmail] = useState("");
//   const [password, onChangePassword] = useState("");

//   const navigation = useNavigation();

//   const handleLoginPress = () => {
//     navigation.navigate("Login");
//   };

//   return (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//       <ImageBackground
//         source={image}
//         resizeMode="cover"
//         style={{ width: "100%", height: "100%" }}
//       >
//         <View style={styles.container}>
//           <View style={styles.registartionWrapper}>
//             <View style={styles.imageWrapper}>
//               {isLogged ? (
//                 <Image
//                   style={styles.userImg}
//                   source={require("../../assets/images/userImg.png")}
//                 />
//               ) : (
//                 <View style={styles.imageHolder} />
//               )}

//               <Image
//                 style={isLogged ? styles.removeIcon : styles.addIcon}
//                 source={require(isLogged
//                   ? "../../assets/images/removeIcon.png"
//                   : "../../assets/images/add.png")}
//               />
//             </View>

//             <Text style={styles.title}>Реєстрація</Text>

//             <CustomInput
//               onChange={onChangeLogin}
//               value={login}
//               placeholder="Логін"
//               autoComplete="login"
//             />

//             <CustomInput
//               onChange={onChangeEmail}
//               value={email}
//               placeholder="Адреса електронної пошти"
//               autoComplete="email"
//             />

//             <CustomInput
//               onChange={onChangePassword}
//               value={password}
//               secureTextEntry={true}
//               placeholder="Пароль"
//               autoComplete="password"
//             />

//             <Text style={styles.loginText}>
//               Вже є акаунт?
//               <TouchableWithoutFeedback onPress={handleLoginPress}>
//                 <Text
//                   style={{ textDecorationLine: "underline", marginLeft: 5 }}
//                 >
//                   Увійти
//                 </Text>
//               </TouchableWithoutFeedback>
//             </Text>
//           </View>
//         </View>
//       </ImageBackground>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-end",
//   },

//   registartionWrapper: {
//     flex: 0.6,
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     backgroundColor: "white",
//     alignItems: "center",
//   },

//   title: {
//     fontSize: 30,
//     fontFamily: "Roboto-Medium",
//     marginBottom: 40,
//     marginTop: 90,
//   },
//   imageWrapper: {
//     position: "relative",
//     width: 120,
//   },
//   userImg: {
//     position: "absolute",
//     top: -60,
//   },
//   imageHolder: {
//     position: "absolute",
//     top: -60,
//     backgroundColor: "#F6F6F6",
//     height: 120,
//     width: 120,
//     borderRadius: 16,
//   },
//   addIcon: {
//     position: "absolute",
//     top: 15,
//     right: -13,
//   },
//   removeIcon: {
//     position: "absolute",
//     top: 15,
//     right: -20,
//   },
//   loginText: {
//     color: "#1B4371",
//     size: 16,
//     lineHeight: 18.75,
//   },
// });
// export default RegistrationScreen;
// {
// }

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Button,
  ImageBackground,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomPressable from "../components/CustomPressable";
import image from "../../assets/images/BG.png";
import { useNavigation } from "@react-navigation/native";

const isLogged = true;

const RegistrationScreen = () => {
  const [login, onChangeLogin] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.imageBackgroundContainer}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
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
                <Text style={styles.loginText}>
                  Вже є акаунт?
                  <TouchableWithoutFeedback
                    onPress={() =>
                      handleLoginPress({ sessionId: 45, userId: "22e24" })
                    }
                  >
                    <Text
                      style={{ textDecorationLine: "underline", marginLeft: 5 }}
                    >
                      Увійти
                    </Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-end",
    justifyContent: "center",
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
  loginText: {
    color: "#1B4371",
    size: 16,
    lineHeight: 18.75,
  },
  imageBackground: {
    // flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },

  imageBackgroundContainer: {
    flex: 1,
    justifyContent: "flex-start", // Align to the top
    paddingTop: 0, // Reset the top padding
  },
});
export default RegistrationScreen;
