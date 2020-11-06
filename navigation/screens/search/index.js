import React, { useState } from "react";
import { SafeAreaView, TextInput, StyleSheet, View, Text } from "react-native";
import { emojiSizes } from "@assets/styles";
import Emoji from "@components/atoms/emoji";
import UserList from "@components/organisms/user-list";
import { searchUsers } from "@utils/helpers";

//TODO: Implement navigation to user profile on click
//TODO: Create user profile screen
//TODO: implement friend request system

export default function SearchScreen({ navigation }) {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

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
          onChangeText={async (text) => {
            setText(text);
            const res = await searchUsers(text);
            console.log(res);
            if (res) {
              setUsers(res);
            }
          }}
          defaultValue={text}
        />
      </View>

      <View style={styles.searchList}>
        <UserList
          users={users}
          _onPress={(user) =>
            navigation.navigate("UserDetails", {
              user,
            })
          }
        ></UserList>
      </View>
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
  searchList: {
    paddingLeft: 50,
  },
});
