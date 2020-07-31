import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { container } from "@assets/styles";

export default Avatar = ({ height, width, imageURL }) => {
  return (
    <View style={container}>
      <Image
        style={{ height, width }}
        source={{
          uri: imageURL,
        }}
      />
    </View>
  );
};
