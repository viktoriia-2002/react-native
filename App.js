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
//         <MainStack.Screen
//           name="Registration"
//           component={RegistrationScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <MainStack.Screen
//           name="Login"
//           component={Login}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <MainStack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             title: "Публікації",
//             headerStyle: styles.headerStyle,
//           }}
//         />
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
//     resizeMode: "cover",
//   },
//   registrationContainer: {
//     flex: 1,
//   },

//   headerStyle: {
//     backgroundColor: "#fff",
//   },
// });
// export default App;

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/components/Navigator.jsx";

import { useFonts } from "expo-font";

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
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
