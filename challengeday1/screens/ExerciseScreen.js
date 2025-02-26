import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ExerciseScreen = () => {
  const PersonalData = [{ Name: "Rubik", LastName: "Dula", School: "BGT", Age: "15" }];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Personal Data</Text>
      <FlatList
        data={PersonalData}
        keyExtractor={(item) => item.Name} // Unique key
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.Name} {item.LastName}</Text>
            <Text style={styles.details}>{item.School}</Text>
            <Text style={styles.details}>Age: {item.Age}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
});

export default ExerciseScreen;
