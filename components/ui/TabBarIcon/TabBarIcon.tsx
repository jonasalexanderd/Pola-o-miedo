import React, { FC } from 'react';
import { Text, View } from 'react-native';
import tabBarIconStyle from '@/components/ui/TabBarIcon/styles';

type TabBarIconProps = {
  icon: React.ReactNode;
  showBadge?: boolean;
  totalBadged?: number
};
const TabBarIcon: FC<TabBarIconProps> = ({icon, showBadge, totalBadged}) => {
  return (
    <View style={tabBarIconStyle.cartContainer}>
      {icon}
      {showBadge && (
        <View style={tabBarIconStyle.badge}>
          <Text style={tabBarIconStyle.badgeText}>{totalBadged}</Text>
        </View>
      )}
    </View>
  );
};

export {TabBarIcon}
