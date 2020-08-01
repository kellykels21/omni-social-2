import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

import Avatar from "@components/atoms/avatar";
import { emojis } from "@utils/helpers";
import { avatarSizes, emojiSizes } from "@assets/styles";

export default function InfoAvatar({
  name,
  subtext,
  emojiCount = 0,
  imageURL,
}) {
  return (
    <SafeAreaView style={styles.thumbnailContainer}>
      <Text style={{ paddingBottom: 10, color: "white" }}>{name}</Text>
      <Avatar size={avatarSizes.large} imageURL={imageURL} />
      <View style={{ flexDirection: "row", paddingTop: 4 }}>
        {emojiCount > 0 &&
          emojis(
            require("@assets/images/fire-icon.png"),
            emojiSizes.small,
            emojiCount
          )}
      </View>
      <Text style={{ paddingTop: 10, color: "white" }}>{subtext}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    alignItems: "center",
  },
});
