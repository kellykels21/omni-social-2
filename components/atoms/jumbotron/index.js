import React from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";

export default Jumbotron = ({ size, imageURL }) => {
  return (
    <SafeAreaView>
      <Image
        style={[{ height: size.height, width: size.width }, styles.jumbotron]}
        source={imageURL}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  jumbotron: {
    borderWidth: 3,
    borderColor: "#7DDBC3",
    borderRadius: 25,
  },
});
