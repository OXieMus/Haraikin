import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,Image,KeyboardAvoidingView,TextInput} from 'react-native';
import MapView, { Marker } from 'react-native-maps';



export default function Mappage(){

    const initialRegion = {
        latitude: 14.881932,   // Latitude of Suranaree University Of Technology
        longitude: 102.020705, // Longitude of Suranaree University Of Technology
        latitudeDelta: 0.016,  // Delta values determine the zoom level of the map
        longitudeDelta: 0.016,
      };
     
    return (
        <View style={styles.container}>
        <MapView style={styles.map} initialRegion={initialRegion} />
      </View>
      
      );
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
          },
          map: {
            width: '100%',
            height: '100%',
          },
      });