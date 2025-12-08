import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HeaderProps = {
  title: string;
  onMenuPress?: () => void;
  onUserPress?: () => void;
  showMenuButton?: boolean;
};

export default function Header({ 
  title, 
  onMenuPress, 
  onUserPress, 
  showMenuButton = true 
}: HeaderProps) {
  return (
    <View style={styles.container}>
      {/* Left: Menu Button */}
      {showMenuButton && (
        <TouchableOpacity 
          style={styles.iconContainer}
          onPress={onMenuPress}
        >
          <Ionicons name="menu" size={28} color="#0c509e" />
        </TouchableOpacity>
      )}
      
      {/* Center: Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.text} numberOfLines={1}>
          {title}
        </Text>
      </View>
      
      {/* Right: User Icon */}
      <TouchableOpacity 
        style={styles.iconContainer}
        onPress={onUserPress}
      >
        <Ionicons name="person-circle-outline" size={24} color="#0c509e" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  iconContainer: {
    padding: 8,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c509e',
  },
});