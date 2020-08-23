import React, { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, View } from "react-native";
import { emojiSizes } from "@assets/styles";
import Emoji from "@components/atoms/emoji";
import { OMNI_API_URL } from "@env";

export default function FriendScreen() {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  async function searchUsers() {
    try {
      const results = await axios({
        method: "get",
        headers: { "Content-Type": "application/json" },
        url: OMNI_API_URL + "/user/search?name=" + searchValue,
      });

      await setUsers(results.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInputContainer}>
        <View style={{ paddingRight: 10, alignSelf: "center" }}>
          <Emoji
            size={emojiSizes.small}
            imageURL={require("@assets/images/SearchIconV2.png")}
          />
        </View>

        <TextInput
          style={{
            height: 40,
            color: "white",
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: 300,
          }}
          placeholder="Find Friends"
          placeholderTextColor="white"
          onChangeText={(text) => {
            setText(text);
            searchUsers();
          }}
          defaultValue={text}
        />
      </View>

      <View style={styles.searchList}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100D38",
  },
  textInputContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  searchList: {},
});
