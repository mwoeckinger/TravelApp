import React from 'react';
import { View, Text, useColorScheme, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HeaderExploreScreen = () => {
  const scheme = useColorScheme();
  const textColor = scheme === 'dark' ? '#006A50' : '#FFF';


  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoTextContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={[styles.headerText, { color: textColor }]}>Voyager</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
      alignItems: 'center', // Zentriert den Inhalt horizontal
      justifyContent: 'space-around', // Verteilt den Inhalt gleichmäßig
    },
    logoTextContainer: {
      flexDirection: 'row', // Anordnung in einer Zeile
      alignItems: 'center', // Zentriert den Inhalt der Zeile vertikal
    },
    logo: {
      width: 50, // Anpassen entsprechend der Bildgröße
      height: 50, // Anpassen entsprechend der Bildgröße
      marginRight: 10, // Abstand zwischen Logo und Text
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    scrollView: {
      width: '100%', // ScrollView nimmt die volle Breite ein
      marginTop: 10, // Abstand zwischen Logo/Text und ScrollView
    },
    item: {
      width: 50,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      backgroundColor: '#ddd',
    },
  });
export default HeaderExploreScreen