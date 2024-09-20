import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import HeaderExploreScreen from '../(headers)/headerExploreScreen';
import Colors from '@/constants/Colors';

const Layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { height: 82, borderTopWidth: 1 }
    }}>
      <Tabs.Screen
        name='ExploreScreen'
        options={{
          headerStyle: styles.headerstyle, // Stelle sicher, dass der Header groß genug für alle Inhalte ist
          headerTitle: () => (
            <HeaderExploreScreen/>
          ),
          tabBarLabel: 'Find'
        }}
      />
    <Tabs.Screen name='Trip'/>
    <Tabs.Screen name='Bookings'/>
    <Tabs.Screen name='Account'/>
      {/* Weitere Tabs.Screen Komponenten */}
    </Tabs>
  );
};

const styles = StyleSheet.create({
    headerstyle:{
      height: 140, 
      backgroundColor: '#006A50',
      
    },
  
  });


export default Layout;
