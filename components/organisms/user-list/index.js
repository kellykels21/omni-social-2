import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";

export default UserList = ({ users, _onPress }) => {
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              _onPress(item);
            }}
          >
            <Text style={{ color: "white" }}>{item.handle}</Text>
            <Text style={{ color: "grey" }}>
              {item.firstName} {item.lastName}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
