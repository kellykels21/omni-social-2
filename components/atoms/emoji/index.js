import React from "react";
import { View, Image } from "react-native";

export default Emoji = ({ size, imageURL }) => {
  return (
    <View>
      <Image
        style={{ height: size.height, width: size.width }}
        source={imageURL}
      />
    </View>
  );
};
