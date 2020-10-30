import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Header from "@components/atoms/login/header";
import TouchButton from "@components/atoms/touch-button";
import { buttonSizes } from "@assets/styles";
import { headerAlignments, container } from "@assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AppleAuthentication from "expo-apple-authentication";
import {
  facebookLogin,
  googleLogin,
  checkForExistingUser,
} from "@utils/helpers";

// TODO: Implement social login helper functions for google
// TODO: clear db and sign up using fb

export default function LoginScreen({ navigation }) {
  useEffect(() => {
    AsyncStorage.getItem("@user_info", (err, result) => {
      if (result) {
        navigation.navigate("Tabs", { screen: "Home" });
      }
    });
  }, []);

  return (
    <SafeAreaView style={[container, { backgroundColor: "#8B60F0" }]}>
      <SafeAreaView style={styles.headerContainer}>
        <Header
          headerText="Hello"
          subheadline="Sign into your account"
          alignment={headerAlignments.center}
        ></Header>
      </SafeAreaView>

      <SafeAreaView style={styles.loginButtonsContainer}>
        <TouchButton
          _onPress={async () => {
            const fbData = await facebookLogin();

            const exists = await checkForExistingUser(fbData.id);
            if (exists) {
              navigation.navigate("Tabs", { screen: "Home" });
            } else {
              const userData = {
                authId: fbData.id,
                name: fbData.name,
              };

              navigation.navigate("Form", { userData });
            }
          }}
          title={"Facebook"}
          color={"blue"}
          size={buttonSizes.large}
          radius={10}
          textColor={"white"}
        />
        <TouchButton
          _onPress={async () => {
            const googleData = await googleLogin();
            console.log(googleData);
            const exists = await checkForExistingUser(googleData.id);
            if (exists === true) {
              navigation.navigate("Tabs", { screen: "Home" });
            } else {
              const userData = {
                authId: googleData.user.id,
                name: googleData.user.name,
              };

              navigation.navigate("Form", { userData });
            }
          }}
          title={"Google"}
          color={"red"}
          size={buttonSizes.large}
          radius={10}
          textColor={"black"}
        />

        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          style={{ width: 300, height: 45 }}
          onPress={async () => {
            try {
              const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                  AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                  AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
              });

              // signed in
              const exists = await checkForExistingUser(
                credential.identityToken
              );
              if (exists === true) {
                navigation.navigate("Tabs", { screen: "Home" });
              } else {
                const userData = {
                  authId: credential.identityToken,
                  name: null,
                };

                navigation.navigate("Form", { userData });
              }
            } catch (e) {
              if (e.code === "ERR_CANCELED") {
                // handle that the user canceled the sign-in flow
              } else {
                // handle other errors
              }
            }
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
    flex: 4,
    justifyContent: "space-evenly",
  },
});
