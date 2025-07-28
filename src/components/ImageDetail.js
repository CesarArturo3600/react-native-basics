import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({});

export default ImageDetail;
