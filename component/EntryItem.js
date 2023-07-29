import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

const EntryItem = ({ entry, navigation }) => {
  const { id, name, calories, reviewed } = entry;
  return (
    <View
      style={styles.entryItem}
      onTouchEnd={() => {
        navigation.navigate("EditEntryScreen", {
          entryId: id,
        });
      }}
    >
      <Text style={styles.entryText}>{name}</Text>
      <View style={styles.spacer}></View>
      {calories > 500 && !reviewed ? (
        <Icon name="warning" size={24} color="yellow" />
      ) : null}
      <Text style={styles.caloriesTag}>{calories}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  entryItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 3,
    backgroundColor: "#424497",
    color: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  entryText: {
    color: "white",
  },
  spacer: {
    flex: 1,
  },
  caloriesTag: {
    backgroundColor: "white",
    borderRadius: 5,
    color: "#424497",
    padding: 5,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default EntryItem;
