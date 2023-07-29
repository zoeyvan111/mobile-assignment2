import { View, Text } from "react-native";
import React from "react";
import AddEntryForm from "../component/AddEntryForm";

export default function AddAnEntryScreen({ navigation }) {
  return (
    <View>
      <AddEntryForm navigation={navigation} />
    </View>
  );
}
