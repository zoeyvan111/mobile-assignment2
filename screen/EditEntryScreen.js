import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import entryNetwork from "../firebase/entriesClient";
import EntryDetail from "../component/EntryDetail";

export default function EditEntryScreen({ route, navigation }) {
  const { entryId } = route.params;
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    entryNetwork.getEntryById(entryId).then((entry) => {
      setEntry(entry);
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {entry ? <EntryDetail entry={entry} navigation={navigation} /> : null}
    </View>
  );
}
