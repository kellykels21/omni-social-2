import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default Avatar = ({ size, imageURL }) => {
  return (
    <View>
      <Image
        style={[{ height: size.height, width: size.width }, styles.avatarImage]}
        source={imageURL}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarImage: {
    borderWidth: 3,
    borderColor: "#7DDBC3",
    borderRadius: 100,
  },
});
