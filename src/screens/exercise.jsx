import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Exercise = () => {
  const yourName = "John doe";
  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.title}>Getting started with ReactNative</Text>
      <Text style={styles.subTitle}>My name is {yourName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
  },
});

export default Exercise;
