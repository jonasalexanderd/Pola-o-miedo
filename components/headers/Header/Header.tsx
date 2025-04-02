import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs/src/types';
import headerStyle from '@/components/headers/Header/styles';

type HeaderProps = {
  totalItems?: number;
} & BottomTabHeaderProps;

const Header: FC<HeaderProps> = ({ totalItems, options: { title } }) => {
  return (
    <View style={headerStyle.header}>
      <Text style={headerStyle.title}>{title}</Text>
      <Text style={headerStyle.subtitle}>{totalItems} items</Text>
    </View>
  );
};

export { Header };
