import { Tabs } from 'expo-router';
import { ShoppingCart, Home, User, Bell } from 'lucide-react-native';
import { SafeAreaView } from 'react-native';
import { TabBarIcon } from '@/components/ui/TabBarIcon/TabBarIcon';
import { MainHeader } from '@/components/headers/MainHeader/MainHeader';
import { Header } from '@/components/headers/Header/Header';
import { useCartStore } from '@/store/cartStore';

export default function TabLayout() {
  const { totalItems } = useCartStore();
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#eee',
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#8E8E93',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            header: MainHeader,
            headerShown: true,
            tabBarIcon: ({ color }) => <Home size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: 'Shopping cart',
            header: params => Header({ totalItems, ...params }),
            headerShown: true,
            tabBarIcon: ({ color }) => (
              <TabBarIcon icon={<ShoppingCart size={24} color={color} />} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <User size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: 'Notifications',
            tabBarIcon: ({ color }) => (
              <TabBarIcon icon={<Bell size={24} color={color} />} />
            ),
          }}
        />
      </Tabs>
      <SafeAreaView style={{ backgroundColor: '#ffffff' }} />
    </>
  );
}
