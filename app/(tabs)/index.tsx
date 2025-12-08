import { useNavigation } from "expo-router";
import { useState } from 'react';
import { StyleSheet, View } from "react-native";
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';
export default function Home() {
  const navigator = useNavigation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <View style={styles.appContainer}>
      <Header 
        title="Home" 
        onMenuPress={toggleSidebar}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={toggleSidebar} 
      />
      
      <View style={styles.container}>
        <Table />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    position: 'relative',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0c509eff',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0c509eff',
    marginBottom: 10,
  },
});