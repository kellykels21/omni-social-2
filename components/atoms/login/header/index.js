import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = ({ headerText, subheadline, alignment }) => {
  return (
    <View style={(styles.container, { alignItems: alignment })}>
      <Text style={styles.header}>{headerText}</Text>
      <Text style={styles.subheadline}>{subheadline}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 115,
  },
  subheadline: {},
});

export default Header;
