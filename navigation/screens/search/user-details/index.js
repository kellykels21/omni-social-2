import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

import Avatar from "@components/atoms/avatar";
import { container, avatarSizes, buttonSizes } from "@assets/styles";

//TODO: Start filling out the UI for the User Details
//TODO: Pick a UI library?

export default UserDetails = ({ user }) => {
  return (
    <SafeAreaView style={[container, { backgroundColor: "#100D38" }]}>
      <View style={styles.headerButtons}>
        <TouchButton
          _onPress={async () => {
            console.log("clicked user detail button");
          }}
          title={"Ask"}
          color={"blue"}
          size={buttonSizes.small}
          radius={10}
          textColor={"white"}
        />
        <TouchButton
          _onPress={async () => {
            console.log("clicked user detail button");
          }}
          title={"Friend Request"}
          color={"blue"}
          size={buttonSizes.small}
          radius={10}
          textColor={"white"}
        />
      </View>

      <View style={styles.avatarIcon}>
        <Avatar
          size={avatarSizes.large}
          imageURL={require("@assets/images/avatar-placeholder.png")}
        />
      </View>

      <View style={styles.mutualFriends}>
        <Text style={{ color: "white" }}>Mutual Friends</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  avatarIcon: {
    flex: 1,
    paddingTop: 50,
  },
  mutualFriends: {
    flex: 8,
    alignItems: "flex-start",
    paddingTop: 100,
  },
});
