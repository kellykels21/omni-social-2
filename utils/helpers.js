import React from "react";
import Emoji from "@components/atoms/emoji";
// import * as Facebook from "expo-facebook";
// import axios from "axios";
// import { AsyncStorage } from "react-native";
// import { FB_API_ID } from "react-native-dotenv";

// export async function facebookLogin() {
//   try {
//     await Facebook.initializeAsync(FB_API_ID);
//     const {
//       type,
//       token,
//       expires,
//       permissions,
//       declinedPermissions,
//     } = await Facebook.logInWithReadPermissionsAsync({
//       permissions: ["public_profile", "email"],
//     });
//     if (type === "success") {
//       // Get the user's name using Facebook's Graph API
//       const response = await fetch(
//         `https://graph.facebook.com/me?access_token=${token}`
//       );
//       const userData = await response.json();

//       saveNewUser(userData.name, null, userData.id);
//     } else {
//       // type === 'cancel'
//     }
//   } catch ({ message }) {
//     alert(`Facebook Login Error: ${message}`);
//   }
// }

// export async function googleLogin() {
//   const { type, accessToken, user } = await Google.logInAsync({
//     iosClientId: GOOGLE_IOS_CLIENT_ID,
//     androidClientId: GOOGLE_ANDROID_CLIENT_ID,
//   });

//   if (type === "success") {
//     /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
//     console.log(user);
//     await saveNewUser(user.name, user.email, user.id);
//   }
// }

// async function saveNewUser(name, email, authId) {
//   var userData = JSON.stringify({
//     name,
//     email,
//     authId,
//   });

//   try {
//     await axios({
//       method: "post",
//       headers: { "Content-Type": "application/json" },
//       url: OMNI_API_URL + "/user/new",
//       data: userData,
//     });
//   } catch (error) {
//     console.log(error);
//   }

//   try {
//     await AsyncStorage.setItem("@UserAuthID", authId);
//   } catch (error) {
//     // Error saving data
//     throw error;
//   }

//   console.log(AsyncStorage.getItem("@UserAuthId"));
//   // navigation.navigate("Tabs", { screen: "Home" });
// }

export function emojis(imageURL, emojiSize, emojiCount) {
  const emojis = [];
  let id = 1;
  for (let i = 0; i < emojiCount; i++) {
    emojis.push(<Emoji imageURL={imageURL} size={emojiSize} key={id} />);
    id += 1;
  }
  return emojis;
}
