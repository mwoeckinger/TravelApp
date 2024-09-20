import { View, Text, useColorScheme} from 'react-native'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen';


const ExploreScreen = () => {
  
  const scheme = useColorScheme();
 const textColor = scheme === 'dark' ? '#FFF' : '#000';
  return (

    <View>
      <Text style={{color: textColor, fontStyle: 'normal', fontSize: 24}}>
        Explore the world
      </Text>
    </View>
  )
}

export default ExploreScreen