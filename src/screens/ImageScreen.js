import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
        score={9}
      />
      <ImageDetail
        title="beach"
        imageSource={require("../../assets/beach.jpg")}
        score={7}
      />
      <ImageDetail
        title="mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={4}
      />
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
