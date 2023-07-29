import EntryList from "../component/EntryList";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import entriesNetwork from "../firebase/entriesClient";
import EmptyScreen from "../component/EmptyScreen";

export default function OverLimiEntriesScreen({ navigation }) {
  const [entries, setEntries] = useState([]);

  useFocusEffect(() => {
    entriesNetwork.getAllEntries().then((entries) => {
      setEntries(
        entries.filter((item) => item.calories > 500 && !item.reviewed)
      );
    });
  });

  return entries.length == 0 ? (
    <EmptyScreen />
  ) : (
    <EntryList entries={entries} navigation={navigation} />
  );
}
