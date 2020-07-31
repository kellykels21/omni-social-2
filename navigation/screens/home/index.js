import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { container } from "@assets/styles";
import FriendActivityThumbnail from "@components/molecules/friend-activity-thumbnail";
// TODO: Create Friend Activity Thumbnail (molecule)

export default function HomeScreen() {
  return (
    <SafeAreaView style={[container, { backgroundColor: "blue" }]}>
      <FriendActivityThumbnail />
    </SafeAreaView>
  );
}
