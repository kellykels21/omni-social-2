import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  jumbotronSizes,
  avatarSizes,
  emojiSizes,
  capacityIconSizes,
} from "@assets/styles";
import { avatars, emojis } from "@utils/helpers";
import Jumbotron from "@components/atoms/jumbotron";
import CapacityIcon from "@components/atoms/capacity-icon";

// TODO: Make props into an dynamic

export default InfoJumbotron = ({
  friends = 0,
  emojiCount = 0,
  capacity = 0,
  name,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.avatarContainer}>
          {friends > 0 &&
            avatars(
              require("@assets/images/profilepicture.jpg"),
              avatarSizes.small,
              friends
            )}
        </View>

        <View>
          <CapacityIcon capacity={capacity} size={capacityIconSizes.small} />
        </View>

        <View style={styles.emojiContainer}>
          {emojiCount <= 3 &&
            emojis(
              require("@assets/images/fire-icon.png"),
              emojiSizes.small,
              emojiCount
            )}
          {emojiCount > 3 &&
            emojis(
              require("@assets/images/fire-icon.png"),
              emojiSizes.small,
              3
            )}
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Jumbotron size={jumbotronSizes.large} imageURL={""} />
        {emojiCount >= 3 && (
          <View style={styles.bigEmoji}>
            <Emoji
              imageURL={require("@assets/images/fire-icon.png")}
              size={emojiSizes.large}
            />
          </View>
        )}
        <Text style={{ color: "white", paddingTop: 5 }}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 30,
  },
  infoContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 35,
    minWidth: 80,
  },
  avatarContainer: {
    marginBottom: "auto",
    flexDirection: "row",
  },
  emojiContainer: {
    flexDirection: "row",
    paddingTop: 5,
  },
  bigEmoji: {
    position: "absolute",
    right: 5,
    top: -20,
  },
});
