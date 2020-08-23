import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { container } from "@assets/styles";
import VenueList from "@components/organisms/venue-list";
import { fetchLocalVenues, saveVenues } from "@utils/helpers";

// TODO: create FriendActivityList (organism)
// TODO: create Venue Details screen (screens)

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
          navigation.navigate("Home", {
            screen: "VenueDetails",
            params: { item, setCurrentLocation },
          });
        }}
      />
    </SafeAreaView>
  );
}
