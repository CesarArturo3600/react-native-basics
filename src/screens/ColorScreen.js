import React, { useState } from "react";
import { Text, View, Button, FlatList, StyleSheet } from "react-native";
const ColorScreen = () => {
  const [rgbColor, setRgbColor] = useState([]);

  const addColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const color = `rgb(${red}, ${green}, ${blue})`;

    setRgbColor((prevColor) => [...prevColor, color]);
  };

  const renderingItem = ({ item }) => (
    <View style={{ width: 100, height: 100, backgroundColor: item }} />
  );

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Colores</Text>
      <Button title="AddColor" onPress={addColor} />
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={rgbColor}
          keyExtractor={(item) => item}
          renderItem={renderingItem}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 14,
    textTransform: "uppercase",
    color: "gray",
    letterSpacing: 3,
  },
});

export default ColorScreen;
