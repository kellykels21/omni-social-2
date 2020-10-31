import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { container } from "@assets/styles";
import VenueList from "@components/organisms/venue-list";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchLocalVenues, saveVenues } from "@utils/helpers";

// TODO: sync currentlocation to db
// TODO: re-implement and rethink friends and friend search
// TODO: create FriendActivityList (organism)

export default function HomeScreen({ navigation }) {
  const [venues, setVenues] = useState([]);
  const [currentLocation, setCurrentLocation] = useState("");
  const [user, setUser] = useState(null);

  //Get Venues from Google
  useEffect(() => {
    let data;

    async function fetchData() {
      //Get Local Venues from Google
      data = await fetchLocalVenues();
      setVenues(data.results);

      //save data to our db
      await saveVenues(venues);

      const userObject = await AsyncStorage.getItem("@user_info");
      setUser(userObject);
      console.log("USER:", JSON.parse(userObject));
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
            user,
          });
        }}
      />
    </SafeAreaView>
  );
}
