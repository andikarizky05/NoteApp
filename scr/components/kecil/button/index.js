import { Text, Pressable } from "@gluestack-ui/themed";
import React from "react";

const Button = ({ padding, title, onPress, fontSize }) => {
  return (
    <Pressable
      onPress={onPress}
      padding={padding}
      backgroundColor="$green600"
      borderRadius="$xl"
      my="$3"
    >
      <Text color="$white" textAlign="center" fontSize={fontSize || "$lg"}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
