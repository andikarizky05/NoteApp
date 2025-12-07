import React from "react";
import { Text, Box, Textarea, TextareaInput, FormControl, FormControlLabel, InputField, HStack, VStack } from "@gluestack-ui/themed";
import { Input as GlueInput } from "@gluestack-ui/themed";
// import { Picker } from '@react-native-picker/picker'; // Uncomment and fix the import if you need it
import { Picker } from '@react-native-picker/picker'; // Corrected import for Picker

const Input = ({
  dropdown,
  textarea,
  width,
  height,
  fontSize,
  label,
  value,
  secureTextEntry,
  keyboardType,
  onChangeText,
  disabled
}) => {
  if (textarea) {
    return (
      <VStack>
        <FormControlLabel marginTop={"$5"} flexDirection="column" alignItems="flex-start">
          <Text fontSize={fontSize || "$lg"} mb={"$2"} fontWeight="$bold">
            {label}
          </Text>
        </FormControlLabel>
        <Textarea width={width} height={height} borderWidth={"$1"} borderRadius={"$sm"} borderColor="$warmGray500">
          <TextareaInput
            role="form"
            fontSize={fontSize || "$lg"}
            height={"$96"}
            textAlignVertical="top"
            multiline={true}
            numberOfLines={4}
            value={value}
            onChangeText={onChangeText}
            editable={!disabled}
          />
        </Textarea>
      </VStack>
    );
  }

  return (
    <>
      <FormControlLabel marginTop={"$5"} flexDirection="column" alignItems="flex-start">
        <Text fontSize={fontSize || "$md"} fontWeight="bold" mb={"$2"}>
          {label}
        </Text>
        <GlueInput width={width} height={height} borderWidth={"$1"} borderRadius={"$sm"} borderColor={"$warmGray500"}>
          <InputField
            secureTextEntry={secureTextEntry}
            value={value}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            editable={!disabled}
          />
        </GlueInput>
      </FormControlLabel>
    </>
  );
};

export default Input;
