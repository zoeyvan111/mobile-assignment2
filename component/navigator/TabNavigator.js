import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntriesScreen from "../../screen/AllEntriesScreen";
import OverLimitEntriesScreen from "../../screen/OverLimiEntriesScreen";
import { Button, Icon } from "react-native-elements";
import { Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: "#424497",
    },
    headerTintColor: "white",
    tabBarStyle: {
      backgroundColor: "#424497",
    },
    tabBarTintColor: "white",
  };

  const options = (title, iconName) => {
    return {
      headerRight: () => {
        return (
          <Button
            type="clear"
            onPress={() => {
              navigation.navigate("AddAnEntryScreen");
            }}
            icon={<Ionicons name="add" size={24} color={"white"} />}
          />
        );
      },
      tabBarLabel: ({ focused }) => {
        return (
          <Text
            style={{
              color: focused ? "yellow" : "lightgray",
              fontSize: 10,
            }}
          >
            {title}
          </Text>
        );
      },
      tabBarIcon: (focus) => {
        return (
          <Icon
            name={iconName}
            size={24}
            color={focus ? "yellow" : "lightgray"}
          />
        );
      },
    };
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="All Entries"
        component={AllEntriesScreen}
        options={options("All Entries", "add")}
      />
      <Tab.Screen
        name="Over-limit Entries"
        component={OverLimitEntriesScreen}
        options={options("Over-limit Entries", "exclamation")}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
