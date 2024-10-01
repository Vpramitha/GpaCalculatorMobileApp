import React, { useState } from "react";
import { View, StyleSheet, Text,Button } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import MarkTable from "./markTable";
import FormModal from "./formModal"; // Import the modal

export default function Marks() {
  const CurrentGPA = 3.1;
  const GPAforSem = 3.4;
  const [isModalVisible, setModalVisible] = useState(false); // Control modal visibility

  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData); // Do something with form data
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>BSc.(Hons) Information Technology</Text>
        <Text>University Of Kelaniya</Text>
        <Text>2nd Year 2nd Semester</Text>
      </View>

      <MarkTable />
      <Text>Current GPA: {CurrentGPA}</Text>
      <Text>GPA only for this semester: {GPAforSem}</Text>
      <Button title="Open Form" onPress={() => setModalVisible(true)} />

      {/* The modal */}
      <FormModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleFormSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  text: {
    margin: 6,
    textAlign: "center",
  },
  header: {
    alignItems: "center", // Centers items horizontally
    justifyContent: "center", // Centers items vertically
    marginBottom: 20, // Adds spacing below the header
  },
});
