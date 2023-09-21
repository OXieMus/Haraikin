import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

function Bot() {
  return (
    <View style={styles.container}><Text>Bot</Text></View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 80,
    
    width:'100%',
  },
  });

export default Bot