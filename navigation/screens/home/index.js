import React from "react";
import { SafeAreaView, Text } from "react-native";
import { container } from "@assets/styles";
import CapacityIcon from "@components/atoms/capacity-icon";

// TODO: implement info-jumbotron (molecule)
// TODO: create FriendActivityList (organism)
// TODO: create NearbyVenueList (organism)

export default function HomeScreen() {
  return (
    <SafeAreaView style={[container, { backgroundColor: "#100D38" }]}>
      <Text style={{ color: "white" }}>HOME</Text>
    </SafeAreaView>
  );
}
