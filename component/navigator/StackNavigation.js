import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import EditEntryScreen from "../../screen/EditEntryScreen";
import AddAnEntryScreen from "../../screen/AddAnEntryScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
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
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
      <Stack.Screen name="EditEntryScreen" component={EditEntryScreen} />
      <Stack.Screen name="AddAnEntryScreen" component={AddAnEntryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
