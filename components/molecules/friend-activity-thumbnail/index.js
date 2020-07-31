import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { container } from "@assets/styles";

import Avatar from "@components/atoms/avatar";
import Emoji from "@components/atoms/emoji";
import { avatarSizes } from "@assets/styles";

export default function FriendActivityThumbnail() {
  return (
    <SafeAreaView style={(container, styles.thumbnailContainer)}>
      <Text></Text>
      <Avatar size={avatarSizes.large} imageURL="someURL" />
      <Emoji></Emoji>
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  thumbnailContainer: {},
});
