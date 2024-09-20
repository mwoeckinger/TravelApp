import { View, Text, useColorScheme} from 'react-native'
import React from 'react'


const ExploreScreen = () => {
  const scheme = useColorScheme();
 const textColor = scheme === 'dark' ? '#FFF' : '#000';
  return (
    <View>
      <Text style={{color: textColor}}>Explore</Text>
    </View>
  )
}

export default ExploreScreen