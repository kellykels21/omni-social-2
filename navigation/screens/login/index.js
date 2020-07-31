import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Header from "@components/atoms/login/header";
import LoginButton from "@components/molecules/login/login-button";
import { headerAlignments, container } from "@assets/styles";

// TODO: Implement social login helper functions for facebook and google

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={container}>
      <SafeAreaView style={styles.headerContainer}>
        <Header
          headerText="Hello"
          subheadline="Sign into your account"
          alignment={headerAlignments.center}
        ></Header>
      </SafeAreaView>

      <SafeAreaView style={styles.loginButtonsContainer}>
        <LoginButton
          title="Facebook"
          color="blue"
          imageURL=""
          _handlePress={() => {
            console.log("Facebook button pressed!");
            navigation.navigate("Home", { screen: "HomeScreen" });
          }}
        />
        <LoginButton
          title="Google"
          color="red"
          imageURL=""
          _handlePress={() => {
            console.log("Google button pressed!");
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonsContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
