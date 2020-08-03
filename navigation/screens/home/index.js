import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { container } from "@assets/styles";
import VenueList from "@components/organisms/venue-list";
import { fetchLocalVenues } from "@utils/helpers";

// TODO: create FriendActivityList (organism)
// TODO: create VenueList (organism)
// TODO: make api response data pass into props

export default function HomeScreen() {
  return (
    <SafeAreaView style={[container, { backgroundColor: "#100D38" }]}>
      <VenueList />
    </SafeAreaView>
  );
}
