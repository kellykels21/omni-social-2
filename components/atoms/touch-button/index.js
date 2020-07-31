import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const TouchButton = ({ _onPress, title, color, height, width }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={_onPress}
        style={{
          backgroundColor: color,
          height: height,
          width: width,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TouchButton;
