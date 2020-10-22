import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Header from "@components/atoms/login/header";
import TouchButton from "@components/atoms/touch-button";
import { buttonSizes } from "@assets/styles";
import { headerAlignments, container } from "@assets/styles";
import { AsyncStorage } from "react-native";
import { facebookLogin, checkForExistingUser } from "@utils/helpers";

// TODO: Implement social login helper functions for google
// TODO: check for auth id in db after receiving auth id
// TODO: clear db and sign up using fb

export default function LoginScreen({ navigation }) {
  useEffect(() => {
    AsyncStorage.clear();
    AsyncStorage.getItem("@UserAuthID", (err, result) => {
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
            const userData = {
              authId: fbData.id,
              name: fbData.name,
            };

            const exists = await checkForExistingUser(userData.authId);
            if (exists) {
              navigation.navigate("Tabs", { screen: "Home" });
            } else {
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
          _onPress={() => {
            setImHere(true);
            setCurrentLocation(placeId);
          }}
          title={"Google"}
          color={"red"}
          size={buttonSizes.large}
          radius={10}
          textColor={"black"}
        />
        <TouchButton
          _onPress={() => {
            setImHere(true);
            setCurrentLocation(placeId);
          }}
          title={"Twitter"}
          color={"cyan"}
          size={buttonSizes.large}
          radius={10}
          textColor={"black"}
        />
        <TouchButton
          _onPress={() => {
            setImHere(true);
            setCurrentLocation(placeId);
          }}
          title={"Apple Sign In"}
          color={"black"}
          size={buttonSizes.large}
          radius={10}
          textColor={"white"}
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
