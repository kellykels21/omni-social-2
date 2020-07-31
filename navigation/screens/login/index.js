import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import TouchButton from "@atoms/touch-button";
import Header from "@atoms/login/header";
import { headerAlignments, buttonSizes } from "@utils/enums";

/* TODO:
  Implement social login helper functions for facebook and google
  Update TouchButton to take a buttonSize prop
  Research Global styles
*/

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.headerContainer}>
        <Header
          headerText="Hello"
          subheadline="Sign into your account"
          alignment={headerAlignments.center}
        ></Header>
      </SafeAreaView>

      <SafeAreaView style={styles.loginButtonsContainer}>
        <TouchButton
          _onPress={() => {
            navigation.navigate("Home", { screen: "HomeScreen" });
          }}
          title="Facebook"
          color="blue"
          height={buttonSizes.large.height}
          width={buttonSizes.large.width}
        />
        <TouchButton
          _onPress={() => {
            navigation.navigate("Home", { screen: "HomeScreen" });
          }}
          title="Google"
          color="red"
          height={buttonSizes.large.height}
          width={buttonSizes.large.width}
        />
        <TouchButton
          _onPress={() => {
            navigation.navigate("Home", { screen: "HomeScreen" });
          }}
          title="Apple Sign In"
          color="white"
          height={buttonSizes.large.height}
          width={buttonSizes.large.width}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonsContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
