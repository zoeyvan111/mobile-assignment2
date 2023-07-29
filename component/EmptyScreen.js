import React from "react";
import { View, StyleSheet, Text } from "react-native";

const EmptyScreen = (props) => {
  return (
    <View style={styles.centerView}>
      <Text>Nothing there. Hit the plus button to add a new entry</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EmptyScreen;
