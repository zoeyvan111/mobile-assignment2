import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import entryNetwork from "../firebase/entriesClient";
import React, { useState } from "react";

const AddEntryForm = ({ navigation }) => {
  const [caloriesInput, setCaloriesInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  return (
    <View style={styles.form}>
      <View style={styles.formRow}>
        <Text style={styles.formLabel}>Calories</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCaloriesInput}
          value={caloriesInput}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.multiLineFormRow}>
        <Text style={styles.formLabel}>Description</Text>
        <TextInput
          style={styles.multiLineInput}
          numberOfLines={10}
          textAlignVertical="top"
          multiline={true}
          onChangeText={setDescriptionInput}
          value={descriptionInput}
        />
      </View>
      <View style={styles.buttonsStack}>
        <Button
          title={"Reset"}
          onPress={() => {
            setCaloriesInput("");
            setDescriptionInput("");
          }}
          color={"#42449c"}
          style={styles.button}
        ></Button>
        <Button
          title={"Submit"}
          onPress={() => {
            entryNetwork
              .addEntry({
                calories: parseInt(caloriesInput),
                name: descriptionInput,
              })
              .then(() => {
                navigation.navigate("Home");
              });
          }}
          color={"#42449c"}
          style={styles.button}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    margin: 30,
    padding: 10,
    borderRadius: 10,
    color: "white",
  },
  formRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  multiLineFormRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    margin: 10,
  },
  formLabel: {
    width: 100,
    color: "white",
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#ffffff33",
    borderRadius: 5,
    padding: 5,
  },
  multiLineInput: {
    flex: 1,
    height: 100,
    backgroundColor: "#ffffff33",
    borderRadius: 5,
    padding: 5,
  },
  buttonsStack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    margin: 5,
    backgroundColor: "#42449c",
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default AddEntryForm;
