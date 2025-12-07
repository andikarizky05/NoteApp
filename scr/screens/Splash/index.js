import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconLogo } from '../../assets';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to 'Login' screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.pages}>
      <IconLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
