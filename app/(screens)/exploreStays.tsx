import { View, Text, useColorScheme} from 'react-native'
import React from 'react'


const exploreStays = () => {
  const scheme = useColorScheme();
 const textColor = scheme === 'dark' ? '#FFF' : '#000';
  return (
    
    <View>
      <Text style={{color: textColor, fontStyle: 'normal', fontSize: 24}}>
      exploreStays
      </Text>

    </View>
  )
}

export default exploreStays