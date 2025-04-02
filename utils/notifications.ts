import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { useNotificationsStore } from '../store/notificationsStore';

export async function setupNotifications() {
  if (Platform.OS === 'web') return;

  await Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

export async function sendNotification(title: string, body: string) {
  // Add to notifications store
  useNotificationsStore.getState().addNotification({
    title,
    message: body,
  });

  // Only show push notification on native platforms
  if (Platform.OS === 'web') return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: true,
    },
    trigger: null,
  });
}