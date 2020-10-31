import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { container } from "@assets/styles";
import {
  renderImage,
  addUserCurrentLocation,
  removeUserCurrentLocation,
} from "@utils/helpers";
import TouchButton from "@components/atoms/touch-button";
import { buttonSizes } from "@assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function VenueDetails({ route }) {
  const [imHere, setImHere] = useState(false);
  const { user } = route.params;
  const { item } = route.params;
  const { setCurrentLocation } = route.params;
  const { currentLocation } = route.params;
  const placeId = item.place_id;
  const userObject = JSON.parse(user);

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
            _onPress={async () => {
              await addUserCurrentLocation(userObject.authId, placeId);
              setImHere(true);
              setCurrentLocation(placeId);
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
            _onPress={async () => {
              await removeUserCurrentLocation(userObject.authId);
              setImHere(false);
              setCurrentLocation(null);
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
          flex: 1,
          justifyContent: "flex-start",
          alignSelf: "stretch",
          padding: 20,
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
