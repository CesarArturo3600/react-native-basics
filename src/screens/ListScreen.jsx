import React from "react";

import { FlatList, View, Text, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "mikaela", age: 23 },
    { name: "Delia", age: 24 },
    { name: "Rosario", age: 25 },
    { name: "karen", age: 26 },
    { name: "genalith", age: 27 },
    { name: "elar", age: 28 },
    { name: "luzgard", age: 29 },
    { name: "dominga", age: 30 },
    { name: "cesar", age: 31 },
  ];

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        /*         horizontal
        showsHorizontalScrollIndicator={false} */
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => (
          <Text style={styles.itemStyle}>
            {item.name} - edad:{item.age}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    fontSize: 14,
    marginVertical: 7,
  },
});

export default ListScreen;
