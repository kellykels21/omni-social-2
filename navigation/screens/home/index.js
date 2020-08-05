import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { container } from "@assets/styles";
import VenueList from "@components/organisms/venue-list";
import { fetchLocalVenues } from "@utils/helpers";
import { OMNI_API_URL } from "@env";
import axios from "axios";

// TODO: create FriendActivityList (organism)
// TODO: create VenueList (organism)

export default function HomeScreen() {
  const [venues, setVenues] = useState([]);

  async function saveVenues(data) {
    const venueList = JSON.stringify(data);
    try {
      console.log("Saving Venues to DB...");
      await axios({
        method: "post",
        headers: { "Content-Type": "application/json" },
        url: OMNI_API_URL + "/venue/new/batch",
        data: {
          venues: venueList,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let data;
    async function fetchData() {
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
