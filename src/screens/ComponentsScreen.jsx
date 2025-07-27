import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greetings = "bye there";
  return (
    <View>
      <Text style={styles.textStyle}>this is Component Screen</Text>
      <Text style={styles.parrStyle}>{greetings}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    marginTop: 20,
    paddingTop: 100,
  },
  parrStyle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
});

export default ComponentsScreen;
