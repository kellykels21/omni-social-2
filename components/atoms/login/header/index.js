import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { container } from "@assets/styles";
export default Header = ({ headerText, subheadline, alignment }) => {
  return (
    <View style={(container, { alignItems: alignment })}>
      <Text style={styles.header}>{headerText}</Text>
      <Text style={styles.subheadline}>{subheadline}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 115,
    color: "white",
  },
  subheadline: {
    color: "white",
    fontSize: 20,
  },
});
