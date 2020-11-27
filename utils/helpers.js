import React from "react";
import Emoji from "@components/atoms/emoji";
import Avatar from "@components/atoms/avatar";
import * as Location from "expo-location";
import { View } from "react-native";
import { GOOGLE_API_KEY, OMNI_API_URL, FB_API_ID } from "@env";
import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function facebookLogin() {
  try {
    await Facebook.initializeAsync(FB_API_ID);
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile", "email"],
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      const userData = await response.json();

      // await saveNewUser(userData.name, null, userData.id);
      return userData;
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

export async function googleLogin() {
  try {
    const result = await Google.logInAsync({
      iosClientId:
        "678516748760-migvhecblr3b7actrges0o8v4q3r36dr.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      return result;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }

  if (type === "success") {
    // Then you can use the Google REST API
  }
}

export async function saveNewUser(handle, email, firstName, lastName, authId) {
  var userData = JSON.stringify({
    handle,
    email,
    firstName,
    lastName,
    authId,
  });

  const response = await axios({
    method: "post",
    headers: { "Content-Type": "application/json" },
    url: OMNI_API_URL + "/user/new",
    data: userData,
  });
  console.log("im here");
  await AsyncStorage.setItem("@UserAuthID", authId);

  return response;
}

/*
  OMNI API
*/
export async function saveVenues(data) {
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

export async function checkForExistingUser(authId) {
  try {
    console.log("Checking for Existing User...");
    console.log("PATH", OMNI_API_URL + "/user/search/authId?authId=" + authId);
    const user = await axios({
      method: "get",
      headers: { "Content-Type": "application/json" },
      url: OMNI_API_URL + "/user/search/authId?authId=" + authId,
    });

    if (user.data.authId !== undefined) {
      await AsyncStorage.setItem("@user_info", JSON.stringify(user.data));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function addUserCurrentLocation(authId, placeId) {
  try {
    console.log("Adding User's Current Location to DB...");

    const user = await axios({
      method: "put",
      headers: { "Content-Type": "application/json" },
      url:
        OMNI_API_URL +
        "/user/location/add?authId=" +
        authId +
        "&placeId=" +
        placeId,
    });

    console.log(user);

    if (user.data.currentLocation === placeId) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function removeUserCurrentLocation(authId) {
  try {
    console.log("Adding User's Current Location to DB...");

    const user = await axios({
      method: "put",
      headers: { "Content-Type": "application/json" },
      url: OMNI_API_URL + "/user/location/remove?authId=" + authId,
    });

    if (user.data.currentLocation === null) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function searchUsers(handle) {
  const userObject = await AsyncStorage.getItem("@user_info");

  const url =
    OMNI_API_URL +
    "/user/search?handle=" +
    handle +
    "&authId=" +
    JSON.parse(userObject).authId;

  console.log(url);
  try {
    console.log("Searching DB for Users...");
    console.log(handle);

    // const response = await fetch(url, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   redirect: "follow", // manual, *follow, error
    //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // });

    const result = await axios({
      method: "get",
      headers: { "Content-Type": "application/json" },
      url: url,
    });

    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createFriendRequest() {
  // Create two new friend requests
}

/*

  Render Image (Jumbotron)

*/
export function renderImage({ item }) {
  if (item.photos) {
    return {
      uri:
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=200&photoreference=" +
        item.photos[0].photo_reference +
        "&key=" +
        GOOGLE_API_KEY,
    };
  } else {
    return require("@assets/images/image-placeholder.jpg");
  }
}

/*

  Google API

*/
export async function fetchLocalVenues() {
  //LOCATION PERMISSIONS
  let { status } = await Location.requestPermissionsAsync();
  if (status !== "granted") {
    setErrorMsg("Permission to access location was denied");
  }

  let location = await Location.getCurrentPositionAsync({});
  const radius = 8000;

  const results = await axios.get(
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
      location.coords.latitude +
      "," +
      location.coords.longitude +
      "&type=bar&key=" +
      GOOGLE_API_KEY +
      "&keyword=bar&radius=" +
      radius +
      " &opennow=true&rankby=prominence"
  );

  return results.data;
}

/*

  Iterators

*/
export function emojis(imageURL, emojiSize, emojiCount) {
  const emojis = [];
  let id = 1;
  for (let i = 0; i < emojiCount; i++) {
    emojis.push(<Emoji imageURL={imageURL} size={emojiSize} key={id} />);
    id += 1;
  }
  return emojis;
}

export function avatars(imageURL, avatarSize, friends) {
  const avatars = [];
  let id = 1;
  let margin = -25;
  for (let i = 0; i < friends; i++) {
    avatars.push(
      <View style={{ position: "absolute", marginLeft: margin }}>
        <Avatar imageURL={imageURL} size={avatarSize} key={id} />
      </View>
    );
    id += 1;
    margin -= 15;
  }
  return avatars;
}
