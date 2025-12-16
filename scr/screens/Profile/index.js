import React, { useState, useEffect } from "react";
import { Box, Text, Image, VStack, ScrollView } from "@gluestack-ui/themed";
import { Button } from "../../components";
import { clearStorage, getData } from "../../utils";
import FIREBASE from "../../config/FIREBASE";

const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState(null);

  // Fetch user data from local storage
  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setProfile(data);
      } else {
        // Optionally navigate to login if no profile is found
        // navigation.replace('Login');
      }
    });
  };

  // Fetch user data when the screen is focused
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  // Handle logout or login navigation
  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.replace("MainApp");
        })
        .catch((error) => {
          // An error happened during sign out.
          alert(error.message);
        });
    } else {
      navigation.replace("Login");
    }
  };

  return (
    <Box
      mt={"$5"}
      mx={"$5"}
      backgroundColor="$blueGray100"
      flex={1}
      marginTop={"$20"}
      flexDirection="column"
    >
      <ScrollView>
        <VStack backgroundColor="$blueGray100" width={"$full"} mb={"$10"}>
          <Image
            size="2xl"
            source={require("../../assets/images/avatar.png")}
            borderRadius={"$full"}
            alignSelf="center"
            alt="Foto Profil"
          />
          <Text
            fontSize={"$xl"}
            alignSelf="center"
            marginTop={"$5"}
            fontWeight="$bold"
          >
            {profile?.nama || "Nama tidak tersedia"}
          </Text>
        </VStack>

        <Box
          flexDirection="column"
          bgColor="$white"
          shadowColor="$black"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={"$25"}
          shadowRadius={"$3.5"}
          justifyContent="space-evenly"
          p={"$5"}
          borderRadius={"$xl"}
        >
          <Text color="$black" fontWeight="$bold" fontSize={"$xl"}>
            Data Diri
          </Text>

          <Box mt={"$5"}>
            <Text color="$black" fontSize={"$sm"}>
              Email
            </Text>
            <Text color="$black" fontSize={"$xl"} mt={"$2"}>
              {profile?.email || "Email tidak tersedia"}
            </Text>
          </Box>

          <Box mt={"$5"}>
            <Text color="$black" fontSize={"$sm"}>
              Nomor Ponsel
            </Text>
            <Text color="$black" fontSize={"$xl"} mt={"$2"}>
              {profile?.nohp || "Nomor ponsel tidak tersedia"}
            </Text>
          </Box>
        </Box>

        <Button
          type="text"
          title={profile ? "Logout" : "Login"}
          padding={"$3"}
          onPress={() => onSubmit(profile)}
        />
      </ScrollView>
    </Box>
  );
};

export default Profile;
