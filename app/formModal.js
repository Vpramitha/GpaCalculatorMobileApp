import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function FormModal({ visible, onClose, onSubmit }) {
  const [formData, setFormData] = useState({ Code: "", Course: "",Result:"" });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData); // Send form data to the parent
    onClose(); // Close the modal
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add Course</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Course Code"
            value={formData.Code}
            onChangeText={(text) => handleInputChange("Code", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Course Name"
            value={formData.Course}
            onChangeText={(text) => handleInputChange("Course", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter Result"
            value={formData.Result}
            onChangeText={(text) => handleInputChange("Result", text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: "#f44336",
  },
});
