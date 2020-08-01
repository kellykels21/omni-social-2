import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

//TODO: updated icon with better quality image

export default CapacityIcon = ({ capacity, size }) => {
  return (
    <View style={styles.capacityIconContainer}>
      <Text style={{ paddingRight: 3, color: "white" }}>{capacity}</Text>
      <Image
        style={[{ height: size.height, width: size.width, marginBottom: 1 }]}
        source={require("@assets/images/capacity-icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  capacityIconContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
