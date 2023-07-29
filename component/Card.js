import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    // Style your card as per your design requirements
  },
});

export default Card;
