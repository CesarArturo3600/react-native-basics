import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const initialState = 0;

const CounterScreen = () => {
  const [counter, setCounter] = useState(initialState);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(initialState);

  return (
    <View>
      <Button title="Increase" onPress={increase} />
      <Button title="Decrease" onPress={decrease} />
      <Button title="reset" onPress={reset} />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

const Style = StyleSheet.create({});

export default CounterScreen;
