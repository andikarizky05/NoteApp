import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Heading,
  Text,
  FormControl,
  Modal,
  ModalBackdrop,
  AlertText,
  Fab,
  FabLabel,
  FabIcon,
  ArrowLeftIcon,
  ScrollView
} from "@gluestack-ui/themed";
import { Button, Input, Pilihan } from "../../components";
import BackFAB from "../../components/kecil/back_fab";
import { useNotes } from "../../context/NotesContext";

const EditNote = ({ route, navigation }) => {
  // Fetching the note data from route params or context (depending on how the data is passed)
  const { noteId } = route.params; // Assuming noteId is passed in the route params
  const { userNotes, updateNote } = useNotes(); // Using correct context values
  
  const note = userNotes.find(note => note.noteId === noteId); // Find the note by noteId
  
  const [title, setTitle] = useState(note ? note.title : "");
  const [content, setContent] = useState(note ? note.content : "");
  const [status, setStatus] = useState(note ? note.status : "");
  const [category, setCategory] = useState(note ? note.category : "");

  const handleSave = () => {
    if (!title.trim() || !content.trim() || !status || !category) {
      Alert.alert("Error", "All fields must be filled!");
      return;
    }
    
    // Call the updateNote function from context
    updateNote(noteId, { title, content, status, category });

    // Navigate back to Home
    navigation.navigate("Home");
    Alert.alert("Success", "Note updated successfully!");
  };

  return (
    <Box flex={1} backgroundColor="$white" justifyContent="center">
      <BackFAB />
      <Box
        shadowColor="$black"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={"$25"}
        shadowRadius={"$3.5"}
        elevation={"$5"}
        backgroundColor="$white"
        borderRadius={"$md"}
        mt={"$8"}
        mx={"$3"}
        px={"$3"}
        pt={"$2"}
      >
        <Heading size="2xl" color="$black">
          Edit Your Task!
        </Heading>
        <Text size="sm" color="$black" my={"$1"}>
          Having a mistake? An edit got you covered!
        </Text>
        <FormControl>
          <Input
            label={"Title"}
            width={"$full"}
            height={"$10"}
            value={title}
            onChangeText={(value) => setTitle(value)}
          />
          <Input
            textarea={true}
            label="Content"
            width={"$full"}
            height={"$32"}
            value={content}
            onChangeText={(value) => setContent(value)}
          />
          <Pilihan
            label="Status"
            selectedValue={status}
            datas={["Active", "Inactive"]}
            onValueChange={setStatus}
          />
          <Pilihan
            label="Category"
            selectedValue={category}
            datas={["Work", "Personal", "Urgent"]} // Example categories
            onValueChange={setCategory}
          />
          <Button
            type="text"
            title="Update"
            padding={10}
            onPress={handleSave}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default EditNote;
