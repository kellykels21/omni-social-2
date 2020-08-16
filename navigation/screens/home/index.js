import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { container } from "@assets/styles";
import VenueList from "@components/organisms/venue-list";
import { fetchLocalVenues, saveVenues } from "@utils/helpers";

// TODO: create FriendActivityList (organism)
// TODO: create VenueList (organism)

export default function HomeScreen() {
  const [venues, setVenues] = useState([]);

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
      <VenueList venues={venues} />
    </SafeAreaView>
  );
}
