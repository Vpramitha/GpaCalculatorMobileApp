import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Import the useRouter for navigation

export default function Home() {
  const router = useRouter(); // Initialize the router

  const handleButtonPress = function () {
    console.log("Button Pressed");
    router.push("/semesters"); // Navigate to the Home page after the progress reaches 100%
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Page!</Text>

      {/* Wrap buttons in a View for styling */}
      <View style={styles.buttonContainer}>
        <Button
          title="Bsc Hons IT University of Kelaniya"
          onPress={handleButtonPress}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Add new Degree" onPress={handleButtonPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20, // Space between buttons
  },
});
