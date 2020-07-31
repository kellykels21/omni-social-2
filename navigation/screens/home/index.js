import React from "react";
import { SafeAreaView } from "react-native";
import { container } from "@assets/styles";
import FriendActivityThumbnail from "@components/molecules/friend-activity-thumbnail";

// TODO: create FriendActivityList (organism)
// TODO; create NearbyVenueList (organism)
// TODO: create Jumbotron (atom)
// TODO: create CapicityIcon (atom)

export default function HomeScreen() {
  return (
    <SafeAreaView style={[container, { backgroundColor: "#100D38" }]}>
      <FriendActivityThumbnail
        name="Marke'l"
        subtext="Golden Star Cafe"
        emojiCount={3}
        imageURL={require("@assets/images/profilepicture.jpg")}
      />
    </SafeAreaView>
  );
}
