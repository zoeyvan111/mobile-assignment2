import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // Style your header as per your design requirements
  },
  headerTitle: {
    // Style your header title as per your design requirements
  },
});

export default Header;
