import { ArrowLeftIcon, Fab, FabIcon, FabLabel } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const BackFAB = () => {
  const navigation = useNavigation();

  return (
    <Fab
      rounded="$xl"
      size="lg"
      placement="top left"
      onPress={() => navigation.goBack()}
      mt="$7"
    >
      <FabIcon as={ArrowLeftIcon} mr="$2" />
      <FabLabel fontWeight="bold">Kembali</FabLabel>
    </Fab>
  );
};

export default BackFAB;
