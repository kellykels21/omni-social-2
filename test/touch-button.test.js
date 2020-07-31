import React from "react";
import renderer from "react-test-renderer";

import TouchButton from "@components/atoms/touch-button";

describe("<TouchButton />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TouchButton
          onPress={() => {
            console.log("Pressed the button");
          }}
          title="Click Me!"
          color="red"
          height={50}
          width={200}
        ></TouchButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
