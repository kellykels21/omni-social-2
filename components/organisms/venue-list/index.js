import React from "react";
import { View, Text, FlatList } from "react-native";
import { container } from "@assets/styles";
import InfoJumbotron from "@components/molecules/info-jumbotron";

export default VenueList = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Venue List</Text>
      {/* <FlatList
        data={[
          {
            name: "venue1",
            placeId: "some-placeId",
            rsvps: 15,
            status: 3,
            location: {},
            photoReference: "",
          },
          {
            name: "venue2",
            placeId: "some-placeId2",
            rsvps: 20,
            status: 1,
            location: {},
            photoReference: "",
          },
        ]}
        renderItem={({ item }) => (
          <InfoJumbotron
            friends={3}
            capacity={item.rsvps}
            emojiCount={item.status}
            imageURL={item.photoReference}
            key={item.placeId}
          />
        )}
      /> */}
    </View>
  );
};
