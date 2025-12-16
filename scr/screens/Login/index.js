import React, { useState } from "react";
import {
  Alert,
  Box,
  Text,
  FormControl,
  Heading,
  AlertText,
  Modal,
  ModalBackdrop,
} from "@gluestack-ui/themed";
import { ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Input, Button } from "../../components";
import { loginUser } from "../../actions/AuthAction";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAlert = (message = "") => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const login = () => {
    if (email && password) {
      loginUser(email, password)
        .then((user) => {
          // User successfully logged in, navigate to the main app
          navigation.replace("MainApp");
        })
        .catch((error) => {
          // Error occurred during login, display error message
          console.log("Error", error.message);
          toggleAlert(error.message);
        });
    } else {
      toggleAlert("Please enter both email and password.");
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Box flex={1} backgroundColor="$blue400" justifyContent="center">
            <Box
              shadowColor="$black"
              shadowOffset={{ width: 0, height: 2 }}
              shadowOpacity="$25"
              shadowRadius="$3.5"
              elevation="$5"
              backgroundColor="$white"
              borderRadius="$md"
              marginTop="$10"
              marginHorizontal="$6"
              p="$5"
            >
              <Heading size="3xl" color="$black">
                Welcome
              </Heading>
              <Text size="sm" color="$black" my="$1">
                Sign in to continue!
              </Text>
              <FormControl>
                <Input
                  label="Email"
                  width="$full"
                  height="$10"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  keyboardType="email-address"
                />
                <Input
                  label="Password"
                  width="$full"
                  height="$10"
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
              </FormControl>
              <Box flexDirection="column" my="$5">
                <Button
                  title="Login"
                  type="text"
                  padding="$3"
                  onPress={login}
                />
                <Text size="sm" color="$black" mt="$4">
                  Don't have an account?
                </Text>
                <Button
                  title="Register"
                  type="text"
                  padding="$3"
                  onPress={() => {
                    navigation.navigate("Register");
                  }}
                />
              </Box>
            </Box>
            
            {/* Show Alert */}
            {showAlert && (
              <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
                <ModalBackdrop />
                <Alert mx="$4" action="error" variant="solid">
                  <AlertText fontWeight="$bold">Error!</AlertText>
                  <AlertText>{alertMessage}</AlertText>
                </Alert>
              </Modal>
            )}
          </Box>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
