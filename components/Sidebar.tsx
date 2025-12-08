import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MenuItem = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  screen?: string;
};

const menuItems: MenuItem[] = [
  { name: 'Home', icon: 'home', screen: 'Home' },
  { name: 'Classes', icon: 'school', screen: 'Classes' },
  { name: 'Students', icon: 'people', screen: 'Students' },
  { name: 'Analytics', icon: 'analytics', screen: 'Analytics' },
  { name: 'Progress', icon: 'trending-up', screen: 'Progress' },
  { name: 'Settings', icon: 'settings', screen: 'Settings' },
  { name: 'Add Payment', icon: 'add-circle', screen: 'Add' },
];

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const navigation = useNavigation();

  const handlePress = (screen?: string) => {
    if (screen) {
      // @ts-ignore - We know the screen exists in our navigation
      navigation.navigate(screen);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.sidebar}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Menu</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#1a2a44" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.menuItems}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handlePress(item.screen)}
            >
              <Ionicons name={item.icon} size={20} color="#1a2a44" style={styles.icon} />
              <Text style={styles.menuItemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1000,
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '70%',
    backgroundColor: '#fff',
    paddingTop: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2,  height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a2a44',
  },
  closeButton: {
    padding: 5,
  },
  menuItems: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  icon: {
    width: 24,
    textAlign: 'center',
  },
});

export default Sidebar;