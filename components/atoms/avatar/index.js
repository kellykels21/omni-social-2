import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default Avatar = ({ height, width, imageURL }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ height, width }}
        source={{
          uri: imageURL,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
