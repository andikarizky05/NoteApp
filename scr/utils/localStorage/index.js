import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to store data
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value)); // Saving value
  } catch (e) {
    // Handle saving error
    console.error("Error saving data:", e);
  }
};

// Function to get data
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // Value was previously stored
      return JSON.parse(value);
    } else {
      return null; // Changed from 0 to null to indicate no data found
    }
  } catch (e) {
    // Error reading value
    console.error("Error reading data:", e);
    return null;
  }
};

// Function to clear all storage
export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error("Error clearing storage:", e);
  }
};
