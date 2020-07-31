import React from "react";
import { SafeAreaView, Image } from "react-native";

import TouchButton from "@components/atoms/touch-button";
import { buttonSizes } from "@assets/styles";

export default function LoginButton({ title, color, imageURL, _handlePress }) {
  return (
    <SafeAreaView>
      <Image
        style={{ height: 25, width: 25 }}
        source={{
          uri: imageURL,
        }}
      />
      <TouchButton
        _onPress={() => {
          _handlePress();
        }}
        title={title}
        color={color}
        buttonSize={buttonSizes.large}
      />
    </SafeAreaView>
  );
}
