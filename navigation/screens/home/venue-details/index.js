import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { container } from "@assets/styles";
import { renderImage } from "@utils/helpers";
import TouchButton from "@components/atoms/touch-button";
import { buttonSizes } from "@assets/styles";

export default function VenueDetails({ route }) {
  const [imHere, setImHere] = useState(false);
  const { item } = route.params;
  const { setCurrentLocation } = route.params;
  const { currentLocation } = route.params;
  const placeId = item.place_id;

  useEffect(() => {
    if (currentLocation === placeId) {
      setImHere(true);
    }
  }, []);

  return (
    <SafeAreaView style={[container, { backgroundColor: "#100D38" }]}>
      {/* Jumbotron Section */}
      <View style={{ flex: 1, alignItems: "center" }}>
        <InfoJumbotron
          friends={3}
          capacity={item.rsvps}
          emojiCount={item.rating}
          image={renderImage({ item })}
          name={""}
        />

        <Text style={{ color: "white", fontSize: 15, paddingBottom: 10 }}>
          {item.name}
        </Text>
        {!imHere && (
          <TouchButton
            _onPress={() => {
              setCurrentLocation(placeId);
              setImHere(true);
            }}
            title={"I'm Here"}
            color={"#342CFB"}
            size={buttonSizes.medium}
            radius={10}
            textColor={"white"}
          />
        )}
        {imHere && (
          <TouchButton
            _onPress={() => {
              setCurrentLocation("");
              setImHere(false);
            }}
            title={"I'm Leaving"}
            color={"#7DDBC3"}
            size={buttonSizes.medium}
            radius={10}
            textColor={"white"}
          />
        )}
      </View>

      {/*  About Section */}
      <View
        style={{
          flex: 2,
          justifyContent: "flex-start",
          alignSelf: "stretch",
          padding: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>About</Text>
        <Text style={{ color: "white", fontSize: 15, marginTop: 15 }}>
          Address: {item.vicinity}
        </Text>
      </View>
    </SafeAreaView>
  );
}
