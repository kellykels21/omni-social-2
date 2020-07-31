import React from "react";
import { View, Image } from "react-native";
import { container } from "@assets/styles";

export default Emoji = ({ height, width, imageURL }) => {
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
