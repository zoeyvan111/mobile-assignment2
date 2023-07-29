import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { database } from "./firebase-setup";

const docToEntry = (doc) => {
  const data = doc.data();
  data.id = doc.id;
  return data;
};

const getAllEntries = async () => {
  const querySnapshot = await getDocs(collection(database, "entries"));
  return querySnapshot.docs.map(docToEntry);
};

const getEntryById = async (id) => {
  const docSnapshot = await getDoc(doc(database, "entries", id));
  return docToEntry(docSnapshot);
};

const addEntry = async (entryInput) => {
  try {
    const docRef = await addDoc(collection(database, "entries"), entryInput);
  } catch (e) {
    console.log(e);
  }
  return entryInput;
};

const markReviewed = async (id) => {
  const entryRef = doc(database, "entries", id);
  await updateDoc(entryRef, { reviewed: true });
};

const removeEntry = async (id) => {
  const entryRef = doc(database, "entries", id);
  await deleteDoc(entryRef);
};

export default {
  getAllEntries,
  getEntryById,
  addEntry,
  markReviewed,
  removeEntry,
};
