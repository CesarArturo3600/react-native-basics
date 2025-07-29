import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorBlock from "../components/ColorBlock";

const config = {
  initialState: "0,0,0",
  configValue: 3,
  radius: "25%",
  width: 300,
  height: 300,
};

const ColorCreator = () => {
  const { configValue, initialState } = config;

  const [blockColor, setBlockColor] = useState(initialState);

  const Hue = (color, value) => {
    console.log("color", color);
    const newBlockColor = blockColor;
    const [r, g, b] = newBlockColor.split(",");

    switch (color) {
      case "red":
        new_r = Number.parseInt(r) + value * configValue;
        if (new_r > 0 && new_r < 256) {
          setBlockColor(`${new_r},${g},${b}`);
        } else {
          new_r = r;
        }

        break;
      case "green":
        new_g = Number.parseInt(g) + value * configValue;
        if (new_g > 0 && new_g < 256) {
          setBlockColor(`${r},${new_g},${b}`);
        } else {
          new_g = g;
        }
        break;
      case "blue":
        new_b = Number.parseInt(b) + value * configValue;
        if (new_b > 0 && new_b < 256) {
          setBlockColor(`${r},${g},${new_b}`);
        } else {
          new_b = b;
        }
        break;
      default:
        console.warn("Invalid color specified");
        return;
    }
  };

  return (
    <View>
      <Text style={Styles.title}>ColorCreator</Text>
      <ColorBlock color="red" Hue={Hue} />
      <ColorBlock color="green" Hue={Hue} />
      <ColorBlock color="blue" Hue={Hue} />

      <View
        style={{
          width: config.width || 200,
          height: config.height || 200,
          borderRadius: config.radius,
          alignSelf: "center",
          boxShadowColor: "#999",
          boxShadowOffset: { width: 0, height: 2 },
          backgroundColor: `rgb(${blockColor})`,
        }}
      />
      <Text style={Styles.boxColor}>rgb({blockColor})</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 14,
    textTransform: "uppercase",
    color: "gray",
    letterSpacing: 2,
  },
  boxColor: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
    color: "#333",
    letterSpacing: 1,
  },
});

export default ColorCreator;
