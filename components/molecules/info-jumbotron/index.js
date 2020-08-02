import React from "react";
import { StyleSheet, View } from "react-native";
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
          {emojiCount > 0 &&
            emojis(
              require("@assets/images/fire-icon.png"),
              emojiSizes.small,
              emojiCount
            )}
        </View>
      </View>

      <View>
        <Jumbotron size={jumbotronSizes.large} imageURL={""} />
        {emojiCount >= 3 && (
          <View style={styles.bigEmoji}>
            <Emoji
              imageURL={require("@assets/images/fire-icon.png")}
              size={emojiSizes.large}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  infoContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 8,
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
