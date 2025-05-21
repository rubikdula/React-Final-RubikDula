import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Welcome = () => {
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        const names = data.users.map(user => user.username);
        setUsernames(names);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <ScrollView>
      <Text style={styles.header}>Welcome</Text>
      {usernames.map((username, idx) => (
        <Text key={idx}>{username}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 24 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  username: { fontSize: 18, marginBottom: 6 }
});

export default Welcome;