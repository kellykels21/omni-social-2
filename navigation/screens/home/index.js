import React from "react";
import { SafeAreaView, Text } from "react-native";
import { container } from "@assets/styles";
import VenueList from "@components/organisms/venue-list";

// TODO: create FriendActivityList (organism)
// TODO: create NearbyVenueList (organism)

export default function HomeScreen() {
  return (
    <SafeAreaView style={[container, { backgroundColor: "#100D38" }]}>
      <VenueList />
    </SafeAreaView>
  );
}
