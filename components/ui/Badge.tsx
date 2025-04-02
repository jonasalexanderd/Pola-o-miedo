import { StyleSheet, Text, View, ViewProps } from 'react-native';

interface BadgeProps extends ViewProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}

export function Badge({ 
  children, 
  variant = 'primary',
  style,
  ...props 
}: BadgeProps) {
  return (
    <View style={[styles.badge, styles[variant], style]} {...props}>
      <Text style={[styles.text, styles[`${variant}Text`]]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#2563EB',
  },
  secondary: {
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  danger: {
    backgroundColor: '#EF4444',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#fff',
  },
  dangerText: {
    color: '#fff',
  },
});