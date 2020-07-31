import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

export default TouchButton = ({ _onPress, title, color, buttonSize }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          _onPress();
        }}
        style={{
          backgroundColor: color,
          height: buttonSize.height,
          width: buttonSize.width,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
