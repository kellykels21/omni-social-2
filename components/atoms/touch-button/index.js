import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

export default TouchButton = ({
  _onPress,
  title,
  color,
  size,
  radius,
  textColor,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          _onPress();
        }}
        style={{
          backgroundColor: color,
          height: size.height,
          width: size.width,
          justifyContent: "center",
          borderRadius: radius,
          color: textColor,
        }}
      >
        <Text style={{ textAlign: "center" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
