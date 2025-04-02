import React from 'react';
import { Text, View } from 'react-native';
import mainHeaderStyle from '@/components/headers/MainHeader/styles';

const MainHeader = () => {
  return (
    <View style={mainHeaderStyle.header}>
      <Text style={mainHeaderStyle.greeting}>Welcome to</Text>
      <Text style={mainHeaderStyle.name}>Beer Store</Text>
    </View>
  );
};

export {MainHeader}
