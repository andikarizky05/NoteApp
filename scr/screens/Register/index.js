import React, { useState } from "react";
import {
  Box,
  Text,
  FormControl,
  Modal,
  ModalBackdrop,
} from "@gluestack-ui/themed";
import { Input, Button } from "../../components";
import BackFAB from "../../components/kecil/back_fab"; // Fixed import path

const Register = ({ navigation }) => {
  // States to store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // You can add validation or API calls here
    if (!name || !email || !phone || !password) {
      alert("Please fill in all fields");
      return;
    }
    // Navigate to login page after registration
    navigation.navigate("Login");
  };

  return (
    <Box flex={1} backgroundColor="$blue400" justifyContent="center">
      <BackFAB />
      <Box
        shadowColor="$black"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={"$25"}
        shadowRadius={"$3.5"}
        elevation={"$5"}
        backgroundColor="$white"
        borderRadius={"$md"}
        marginTop={"$10"}
        marginHorizontal={"$6"}
        p={"$5"}
      >
        <Text size="3xl" color="$black">Hello~</Text>
        <Text size="sm" color="$black" my="$1">Sign up to continue!</Text>

        <FormControl>
          <Input
            label="Nama"
            value={name}
            onChangeText={setName}
            height="$10"
          />
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            height="$10"
          />
          <Input
            label="No. Handphone"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            height="$10"
          />
          <Input
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            height="$10"
          />
        </FormControl>

        <Box flexDirection="column" my="$5">
          <Button
            title="Register"
            type="text"
            padding="$3"
            fontSize="$md"
            onPress={handleRegister}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
