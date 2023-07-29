import { FlatList } from "react-native";
import EntryItem from "./EntryItem";

const EntryList = ({ entries, navigation }) => (
  <FlatList
    data={entries}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <EntryItem key={item.id} entry={item} navigation={navigation} />
    )}
  />
);

export default EntryList;
