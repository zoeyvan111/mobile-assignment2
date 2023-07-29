import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { database } from "./firebase/firebase-setup";
import { DefaultTheme } from "@react-navigation/native";

import StackNavigation from "./component/navigator/StackNavigation";
import { StatusBar } from "react-native";

const TabNavigator = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "purple",
    background: "#817bc7",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle="light-content" backgroundColor="#424497" />
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
