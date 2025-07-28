import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  const toComponents = () => navigate("Components");
  const toList = () => navigate("List");
  const toImage = () => navigate("Image");

  return (
    <View style={styles.view}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        style={styles.buttons}
        title="GO to components Demo!"
        onPress={toComponents}
      />
      <Button style={styles.buttons} title="Go to list demo" onPress={toList} />
      <Button
        style={styles.buttons}
        title="Go to image demo"
        onPress={toImage}
      />
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
  buttons: {
    margin: 0,
    padding: 50,
    backgroundColor: "#f0f0f0",
  },
  view: {
    padding: 20,
  },
});

export default HomeScreen;
