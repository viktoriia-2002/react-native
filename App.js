// import React from "react";
// import {
//   ImageBackground,
//   StyleSheet,
//   View,
//   KeyboardAvoidingView,
// } from "react-native";
// import { useFonts } from "expo-font";
// import RegistrationScreen from "./src/screens/RegistrationScreen.jsx";

// const App = () => {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require("./assets/images/BG.png")}
//         resizeMode="cover"
//         style={styles.image}
//       >
//         <KeyboardAvoidingView
//           style={{ flex: 1 }} // Adjust this to flex: 1
//           behavior={Platform.OS == "ios" ? "padding" : "height"}
//         >
//           <View style={styles.registrationContainer}>
//             <RegistrationScreen />
//           </View>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//   },
//   registrationContainer: {
//     flex: 1,
//   },
// });

// export default App;

//   /* <MainStack.Navigator initialRouteName="Home"> */
// // }

// import "react-native-gesture-handler";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import {
//   ImageBackground,
//   StyleSheet,
//   View,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { useFonts } from "expo-font";
// import Login from "./src/screens/LoginScreen.jsx";
// import RegistrationScreen from "./src/screens/RegistrationScreen.jsx";
// import Home from "./src/screens/Home.jsx";

// const MainStack = createStackNavigator();

// const App = () => {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <NavigationContainer>
//       <MainStack.Navigator initialRouteName="Registration">
//         <MainStack.Screen name="Registration" component={RegistrationScreen} />
//         <MainStack.Screen name="Login" component={Login} />
//         <MainStack.Screen name="Home" component={Home} />
//       </MainStack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//   },
//   registrationContainer: {
//     flex: 1,
//   },
// });

// export default App;

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";
import Login from "./src/screens/LoginScreen.jsx";
import RegistrationScreen from "./src/screens/RegistrationScreen.jsx";
import Home from "./src/screens/Home.jsx";

const MainStack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {/* <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      > */}
      <MainStack.Navigator initialRouteName="RegistrationScreen">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerTitle: "", // Hide the header title
          }}
        />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
      {/* </KeyboardAvoidingView> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  registrationContainer: {
    flex: 1,
  },
});
export default App;
