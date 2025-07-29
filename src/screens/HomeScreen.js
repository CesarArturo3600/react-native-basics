import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  //const { navigate } = navigation;

  const toComponents = () => props.navigation.navigate("Components");
  const toList = () => props.navigation.navigate("List");
  const toImage = () => props.navigation.navigate("Image");
  const toCounter = () => props.navigation.navigate("Counter");
  const toColor = () => props.navigation.navigate("Color");
  const toColorCreator = () => props.navigation.navigate("ColorCreator");

  return (
    <View style={styles.view}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="GO to components Demo!" onPress={toComponents} />
      <Button title="Go to list demo" onPress={toList} />
      <Button title="Go to image demo" onPress={toImage} />
      <Button title="Go to Counter Demo" onPress={toCounter} />
      <Button title="Go to Color Demo" onPress={toColor} />
      <Button title="Go to Color Creator" onPress={toColorCreator} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    color: "#777",
  },

  view: {
    padding: 20,
  },
});

export default HomeScreen;
