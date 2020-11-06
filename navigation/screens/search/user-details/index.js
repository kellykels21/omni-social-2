import React from "react";
import { SafeAreaView, Text } from "react-native";
import { container } from "@assets/styles";

//TODO: Start filling out the UI for the User Details
//TODO: Pick a UI library?

export default UserDetails = ({ user }) => {
  return (
    <SafeAreaView style={[container, { backgroundColor: "#100D38" }]}>
      <Text style={{ color: "white" }}>USER DETAILS</Text>
      <Text style={{ color: "white" }}>{user}</Text>
    </SafeAreaView>
  );
};
