import { Text, Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectInput, SelectItem, SelectPortal, SelectTrigger, FormControlLabel } from "@gluestack-ui/themed";
import React from "react";

const Pilihan = ({ label, datas, width, height, fontSize, selectedValue, onValueChange }) => {
  const renderSelect = () => (
    <Select onValueChange={onValueChange} selectedValue={selectedValue}>
      <SelectTrigger>
        <SelectInput
          fontSize={fontSize || "$lg"}
          placeholder="-- Pilih ---"
          width={width}
          height={height || "$40"}
          color="$black"
        />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper borderWidth="$1" borderRadius="$sm">
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {datas &&
            datas.map((data, index) => (
              <SelectItem key={index} label={data} value={data} />
            ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );

  return (
    <>
      <FormControlLabel marginTop="$10">
        <Text fontSize={fontSize || "$lg"}>{label}:</Text>
      </FormControlLabel>
      {renderSelect()}
    </>
  );
};

export default Pilihan;
