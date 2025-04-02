import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNotificationsStore } from '@/store/notificationsStore';
import { NotificationItem } from '@/components/notifications/NotificationItem';
import { formatDistanceToNow } from '@/utils/date';

export default function NotificationsScreen() {
  const { notifications, markAsRead, clearAll, markAllAsRead } = useNotificationsStore();

  if (notifications.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Notifications</Text>
        </View>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No notifications yet</Text>
          <Text style={styles.emptyMessage}>
            When you receive notifications, they will appear here
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={markAllAsRead}>
            <Text style={styles.actionButton}>Mark all as read</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clearAll}>
            <Text style={[styles.actionButton, styles.clearButton]}>Clear All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.notificationsList}>
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            title={notification.title}
            message={notification.message}
            time={formatDistanceToNow(new Date(notification.time))}
            read={notification.read}
            onPress={() => markAsRead(notification.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    fontSize: 16,
    color: '#007AFF',
  },
  clearButton: {
    color: '#FF3B30',
  },
  notificationsList: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 22,
  },
});