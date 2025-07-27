import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ImageScreen = () => {
  return (
    <View>
      <Text style={Styles.titleStyle}>Image Screen</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ImageScreen;
