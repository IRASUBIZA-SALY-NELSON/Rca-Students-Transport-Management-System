import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Define the type for student data
type Student = {
  id: number;
  name: string;
  class: string;
  location: string;
  status: 'Active' | 'Inactive';
  score: number;
};

// Dummy data
const dummyData: Student[] = [
  { id: 1, name: 'Alice Uwase', class: 'Y1', location: 'Kigali', status: 'Active', score: 85 },
  { id: 2, name: 'Bob Mugisha', class: 'Y2', location: 'Musanze', status: 'Active', score: 92 },
  { id: 3, name: 'Charlie Niyomugabo', class: 'Y1', location: 'Huye', status: 'Inactive', score: 78 },
  { id: 4, name: 'Diana Iradukunda', class: 'Y3', location: 'Rubavu', status: 'Active', score: 88 },
  { id: 5, name: 'Eric Nshuti', class: 'Y2', location: 'Kigali', status: 'Active', score: 95 },
  { id: 6, name: 'saly nelson', class: 'Y2', location: 'Musanze', status: 'Active', score: 93 },
  { id: 7, name: 'Alice Uwase', class: 'Y1', location: 'Kigali', status: 'Active', score: 85 },
  { id: 8, name: 'Bob Mugisha', class: 'Y2', location: 'Musanze', status: 'Active', score: 92 },
  { id: 9, name: 'Charlie Niyomugabo', class: 'Y1', location: 'Huye', status: 'Inactive', score: 78 },
  { id: 10, name: 'Diana Iradukunda', class: 'Y3', location: 'Rubavu', status: 'Active', score: 88 },
  { id: 11, name: 'Eric Nshuti', class: 'Y2', location: 'Kigali', status: 'Active', score: 95 },
  { id: 12, name: 'saly nelson', class: 'Y2', location: 'Musanze', status: 'Active', score: 93 }
];

const Table = () => {
  // Table row component
  const TableRow = ({ student }: { student: Student }) => {
    const navigation = useNavigation();
    
    const handlePress = () => {
      navigation.navigate('StudentDetails', { student });
    };

    // Get first name for avatar fallback
    const firstName = student.name.split(' ')[0];
    const lastName = student.name.split(' ').pop() || '';
    const initials = (firstName[0] + (lastName ? lastName[0] : '')).toUpperCase();
    
    // Get a color based on student ID for consistent avatar background
    const colors = ['#4caf50', '#2196f3', '#9c27b0', '#ff9800', '#e91e63', '#00bcd4'];
    const avatarColor = colors[student.id % colors.length];

    return (
      <TouchableOpacity 
        style={styles.tableRow}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <View style={[styles.avatar, { backgroundColor: `${avatarColor}20` }]}>
          <Text style={[styles.avatarText, { color: avatarColor }]}>{initials}</Text>
        </View>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.studentName} numberOfLines={1}>
            {student.name}
          </Text>
          <Text style={styles.studentEmail} numberOfLines={1}>
            {student.name.toLowerCase().replace(/\s+/g, '.')}@rwandacoding.ac.rw
          </Text>
        </View>
        <Text style={styles.studentClass}>
          {student.class}
        </Text>
        <Ionicons 
          name="chevron-forward" 
          size={20} 
          color="#ccc" 
          style={styles.chevronIcon} 
        />
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Student Records</Text>
        <Text style={styles.headerSubtitle}>{dummyData.length} total students</Text>
      </View>
      
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, { flex: 2 }]}>Student Name</Text>
          <Text style={styles.headerText}>Class</Text>
          <View style={{ width: 24 }} />
        </View>
        
        <View style={styles.tableBody}>
          {dummyData.length > 0 ? (
            dummyData.map((student) => (
              <TableRow key={student.id} student={student} />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="people-outline" size={48} color="#ccc" />
              <Text style={styles.emptyText}>No students found</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    width: '100%',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#1a2a44',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  tableContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerText: {
    color: '#1a2a44',
    fontWeight: '600',
    fontSize: 16,
    flex: 1,
    textAlign: 'left',
  },
  tableBody: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#fff',
  },
  studentName: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  studentClass: {
    width: 50,
    textAlign: 'center',
    backgroundColor: '#e8f4fd',
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    color: '#1a73e8',
    fontWeight: '600',
    marginRight: 15,
  },
  activeStatus: {
    backgroundColor: '#e6f7e6',
    color: '#2e7d32',
  },
  inactiveStatus: {
    backgroundColor: '#ffebee',
    color: '#c62828',
  },
});

export default Table;