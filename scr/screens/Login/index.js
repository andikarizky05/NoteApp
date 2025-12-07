import React, { useState } from "react";
import {
  Box,
  Text,
  FormControl,
  Heading,
  Modal,
  ModalBackdrop,
  AlertText,
  Alert,
} from "@gluestack-ui/themed";
import { Input, Button } from "../../components";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Basic validation check (you can replace this with your actual login logic)
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    // If valid, navigate to MainApp screen
    navigation.navigate("MainApp");

    // Reset the error if successful login
    setError(null);
  };

  return (
    <Box flex={1} backgroundColor="$blue400" justifyContent="center">
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
        <Heading size="3xl" color="$black">
          Welcome
        </Heading>
        <Text size="sm" color="$black" my={"$1"}>
          Sign in to continue!
        </Text>

        {error && (
          <Alert status="error">
            <AlertText>{error}</AlertText>
          </Alert>
        )}

        <FormControl>
          <Input
            label={"Email"}
            width={"$full"}
            height={"$10"}
            onChangeText={setEmail}
            value={email}
          />
          <Input
            label="Password"
            width={"$full"}
            height={"$10"}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
        </FormControl>

        <Box flexDirection="column" my={"$5"}>
          <Button
            title="Login"
            type="text"
            padding={"$3"}
            onPress={handleLogin}
          />
          <Text size="sm" color="$black" mt={"$4"}>
            Don't have an account?
          </Text>
          <Button
            title="Register"
            type="text"
            padding={"$3"}
            onPress={() => {
              navigation.navigate("Register");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
