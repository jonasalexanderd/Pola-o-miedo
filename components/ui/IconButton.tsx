import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Video as LucideIcon } from 'lucide-react-native';

interface IconButtonProps extends TouchableOpacityProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

export function IconButton({
  icon: Icon,
  size = 24,
  color,
  variant = 'primary',
  style,
  ...props
}: IconButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], style]}
      {...props}
    >
      <Icon
        size={size}
        color={color || styles[`${variant}Icon`].color}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#2563EB',
  },
  secondary: {
    backgroundColor: '#F2F2F7',
  },
  danger: {
    backgroundColor: '#FEE2E2',
  },
  primaryIcon: {
    color: '#fff',
  },
  secondaryIcon: {
    color: '#6B7280',
  },
  dangerIcon: {
    color: '#EF4444',
  },
});