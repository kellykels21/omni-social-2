import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { container } from "@assets/styles";

export default Avatar = ({ size, imageURL }) => {
  return (
    <View style={container}>
      <Image
        style={{ height: size.height, width: size.width }}
        source={require("@assets/images/profilepicture.jpg")}
      />
    </View>
  );
};
