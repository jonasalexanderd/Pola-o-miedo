import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import buttonStyle from '@/components/ui/Button/styles';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  style,
  children,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        buttonStyle.button,
        buttonStyle[variant],
        buttonStyle[size],
        style,
      ]}
      {...props}
    >
      <Text style={[buttonStyle.text, buttonStyle[`${variant}Text`]]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
