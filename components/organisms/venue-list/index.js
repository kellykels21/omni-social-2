import React from "react";
import { View, FlatList } from "react-native";
import InfoJumbotron from "@components/molecules/info-jumbotron";

export default VenueList = () => {
  return (
    <View>
      <FlatList
        data={[
          {
            name: "Golden Star Cafe",
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
          {
            name: "venue3",
            placeId: "some-placeId3",
            rsvps: 50,
            status: 5,
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
            name={item.name}
            key={item.placeId}
          />
        )}
      />
    </View>
  );
};
