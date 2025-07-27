import React from "react";

import { FlatList, View, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "amigo#1" },
    { name: "amigo#2" },
    { name: "amigo#3" },
    { name: "amigo#4" },
    { name: "amigo#5" },
    { name: "amigo#6" },
    { name: "amigo#7" },
    { name: "amigo#8" },
    { name: "amigo#9" },
  ];

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => (
          <Text style={styles.itemStyle}>{item.name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    fontSize: 14,
    marginVertical: 20,
  },
});

export default ListScreen;
