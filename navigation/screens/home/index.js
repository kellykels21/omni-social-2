import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { container } from "@assets/styles";
import VenueList from "@components/organisms/venue-list";
import { fetchLocalVenues, saveVenues } from "@utils/helpers";

// TODO: create FriendActivityList (organism)
// TODO: implement login screen
// TODO: re-implement and rethink friends and friend search

export default function HomeScreen({ navigation }) {
  const [venues, setVenues] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    let data;

    async function fetchData() {
      //Get Local Venues from Google
      data = await fetchLocalVenues();
      setVenues(data.results);

      //save data to our db
      await saveVenues(venues);
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView style={[container, { backgroundColor: "#100D38" }]}>
      <VenueList
        venues={venues}
        _onPress={(item) => {
          navigation.navigate("VenueDetails", {
            item,
            currentLocation,
            setCurrentLocation,
          });
        }}
      />
    </SafeAreaView>
  );
}
