import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorBlock = ({ color, Hue }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{color}</Text>
      <Button title={`More ${color}`} onPress={() => Hue(color, 1)} />
      <Button title={`Less ${color}`} onPress={() => Hue(color, -1)} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
    marginBottom: 3,
  },
});

export default ColorBlock;
