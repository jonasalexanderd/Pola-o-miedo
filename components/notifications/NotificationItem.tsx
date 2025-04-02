import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface NotificationItemProps {
  title: string;
  message: string;
  time: string;
  read: boolean;
  onPress: () => void;
}

export function NotificationItem({
  title,
  message,
  time,
  read,
  onPress,
}: NotificationItemProps) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[
        styles.notificationItem,
        !read && styles.unreadItem
      ]}
    >
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationMessage}>{message}</Text>
        <Text style={styles.notificationTime}>{time}</Text>
      </View>
      {!read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  unreadItem: {
    backgroundColor: '#F8F9FA',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#8E8E93',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007AFF',
    marginLeft: 12,
  },
});