import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

const Logo = ({ size, style }) => {
  return (
    <View style={style}>
      <FontAwesome5 name="golf-ball" size={size} color="black" />
    </ View>
  );
}

export default Logo;