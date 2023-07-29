import { View, StyleSheet, Text } from "react-native";
import { Icon, Button } from "react-native-elements";
import entryNetwork from "../firebase/entriesClient";

const EntryDetail = ({ entry, navigation }) => {
  const caloriesLabel = entry.calories
    ? `Calories: ${entry.calories}`
    : "Calories Unknown";
  const nameLabel = entry.name
    ? `Description: ${entry.name}`
    : "Description Unknown";
  return (
    <View style={styles.card}>
      <Text>{caloriesLabel}</Text>
      <Text>{nameLabel}</Text>
      <View style={styles.buttonsStack}>
        <Button
          onPress={() => {
            entryNetwork.removeEntry(entry.id).then(() => {
              navigation.navigate("Home");
            });
          }}
          style={styles.button}
          icon={<Icon name="delete" size={20} color="white" />}
        ></Button>
        <Button
          onPress={() => {
            entryNetwork.markReviewed(entry.id).then(() => {
              navigation.navigate("Home");
            });
          }}
          style={styles.button}
          icon={<Icon name="done" size={20} color="white" />}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 30,
    padding: 30,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: "#9a96e8",
    gap: 10,
    elevation: 3,
  },
  buttonsStack: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    margin: 5,
  },
});

export default EntryDetail;
