import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

interface SettingsItemProps {
  title: string;
  type: 'link' | 'toggle';
  value?: string | boolean;
  onPress?: () => void;
  onToggle?: (value: boolean) => void;
}

export function SettingsItem({
  title,
  type,
  value,
  onPress,
  onToggle,
}: SettingsItemProps) {
  return (
    <TouchableOpacity 
      style={styles.settingItem}
      onPress={onPress}
      disabled={type === 'toggle'}
    >
      <Text style={styles.settingTitle}>{title}</Text>
      {type === 'toggle' ? (
        <Switch 
          value={value as boolean} 
          onValueChange={onToggle}
          trackColor={{ false: '#D1D1D6', true: '#34C759' }}
        />
      ) : (
        <View style={styles.linkContainer}>
          {value && (
            <Text style={styles.settingValue}>{value}</Text>
          )}
          <ChevronRight size={20} color="#8E8E93" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  settingTitle: {
    fontSize: 16,
    color: '#000',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingValue: {
    fontSize: 16,
    color: '#8E8E93',
    marginRight: 8,
  },
});