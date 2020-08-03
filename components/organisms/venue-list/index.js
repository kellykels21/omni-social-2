import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import InfoJumbotron from "@components/molecules/info-jumbotron";
import { GOOGLE_API_KEY } from "@env";

export default VenueList = ({ venues }) => {
  function renderImage({ item }) {
    if (item.photos) {
      return {
        uri:
          "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
          item.photos[0].photo_reference +
          "&key=" +
          GOOGLE_API_KEY,
      };
    } else {
      return require("@assets/images/image-placeholder.jpg");
    }
  }

  return (
    <View>
      <FlatList
        data={venues}
        renderItem={({ item }) => (
          <InfoJumbotron
            friends={3}
            capacity={item.rsvps}
            emojiCount={item.rating}
            image={renderImage({ item })}
            name={item.name}
            key={item.place_id}
          />
        )}
      />
    </View>
  );
};
