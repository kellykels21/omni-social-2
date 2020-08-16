import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import InfoJumbotron from "@components/molecules/info-jumbotron";
import { GOOGLE_API_KEY } from "@env";
import { renderImage } from "@utils/helpers";

export default VenueList = ({ venues, _onPress }) => {
  return (
    <View>
      <FlatList
        data={venues}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              _onPress(item);
            }}
          >
            <InfoJumbotron
              friends={3}
              capacity={item.rsvps}
              emojiCount={item.rating}
              image={renderImage({ item })}
              name={item.name}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
