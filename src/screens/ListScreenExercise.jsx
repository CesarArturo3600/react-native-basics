import React from "react";

import { FlatList, Text, StyleSheet, View } from "react-native";

const ListScreenExercise = () => {
  const amigos = [
    { name: "Samantha", age: "23" },
    { name: "Diego", age: "14" },
    { name: "Elar", age: "35" },
    { name: "Mikaela", age: "3" },
    { name: "Delia", age: "32" },
  ];
  return (
    <View style={{ padding: 20 }}>
      <Text style={Style.titleStyle}>Lista de amigos</Text>
      <FlatList
        keyExtractor={(item) => item.name}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={amigos}
        renderItem={({ item }) => (
          <Text style={Style.itemStyle}>
            {item.name} - Age: {item.age}
          </Text>
        )}
      />
    </View>
  );
};

const Style = StyleSheet.create({
  titleStyle: {
    alignItems: "center",
    fontSize: 20,
  },
  itemStyle: {
    fontSize: 14,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default ListScreenExercise;
