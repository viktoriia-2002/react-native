import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Login from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import Home from "../screens/Home";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const Navigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Registration">
      <MainStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Публікації",
          headerStyle: styles.headerStyle,
        }}
      />
    </MainStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
  },
});
export default Navigator;

// const TabNavigation = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarStyle: {
//           display: route.name === "Create" ? "none" : "flex",
//         },
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: "#e91e63",
//       })}
//       initialRouteName="Home"
//     >
//       <Tab.Screen
//         name="Home"
//         component={PostsScreen}
//         options={{
//           tabBarIcon: () => (
//             <MaterialCommunityIcons
//               name={"view-grid-outline"}
//               size={25}
//               color="#aaa"
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Create"
//         component={CreatePostsScreen}
//         options={{
//           tabBarIcon: () => (
//             <MaterialCommunityIcons
//               name={"plus-thick"}
//               size={20}
//               color="white"
//             />
//           ),
//           tabBarIconStyle: {
//             backgroundColor: "#FF6C00",
//             borderRadius: 100,
//             elevation: 3,
//             width: 70,
//             height: 35,
//             alignItems: "center",
//             justifyContent: "center",
//             marginTop: 5,
//             marginBottom: 5,
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Profil"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: () => (
//             <MaterialCommunityIcons
//               name={"account-outline"}
//               size={28}
//               color="#aaa"
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
