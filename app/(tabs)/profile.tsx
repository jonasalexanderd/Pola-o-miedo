import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Settings, ChevronRight } from 'lucide-react-native';

const PROFILE_IMAGE = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80";

const STATS = [
  { label: 'Orders', value: '24' },
  { label: 'Reviews', value: '12' },
  { label: 'Points', value: '890' },
];

const MENU_ITEMS = [
  { id: 1, title: 'My Orders', icon: 'package' },
  { id: 2, title: 'Favorites', icon: 'heart' },
  { id: 3, title: 'Delivery Address', icon: 'map-pin' },
  { id: 4, title: 'Payment Methods', icon: 'credit-card' },
  { id: 5, title: 'Help Center', icon: 'help-circle' },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image 
            source={{ uri: PROFILE_IMAGE }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Settings size={24} color="#007AFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          {STATS.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.menuContainer}>
        {MENU_ITEMS.map(item => (
          <TouchableOpacity key={item.id} style={styles.menuItem}>
            <Text style={styles.menuTitle}>{item.title}</Text>
            <ChevronRight size={20} color="#8E8E93" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  email: {
    fontSize: 16,
    color: '#8E8E93',
    marginTop: 4,
  },
  editButton: {
    padding: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  statLabel: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 4,
  },
  menuContainer: {
    paddingTop: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  menuTitle: {
    fontSize: 16,
    color: '#000',
  },
  logoutButton: {
    marginTop: 24,
    marginHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FF3B30',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});