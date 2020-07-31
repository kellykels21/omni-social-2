import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { container } from "@assets/styles";

import Avatar from "@components/atoms/avatar";
import Emoji from "@components/atoms/emoji";
import { avatarSizes } from "@assets/styles";

export default function FriendActivityThumbnail({
  headline,
  subtext,
  emojiCount = 0,
}) {
  return (
    <SafeAreaView style={(container, styles.thumbnailContainer)}>
      <Text>{headline}</Text>
      <Avatar size={avatarSizes.large} imageURL="someURL" />
      <Emoji>{emojiCount}</Emoji>
      <Text>{subtext}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  thumbnailContainer: {},
});
