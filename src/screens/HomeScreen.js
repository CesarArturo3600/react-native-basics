import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;
  console.log("nav");

  const toComponents = () => navigate("Components");

  const touchableOp = () => navigate("ListScreenExercise");

  return (
    <View>
      <Text style={styles.text}>HomeScreen 33</Text>
      <Button title="GO to components Demo!" onPress={toComponents} />
      <TouchableOpacity onPress={touchableOp}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
