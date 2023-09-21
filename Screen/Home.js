import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Postcard from '../component/postcard';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Homenoti from './Homenoti';
import Friendpage from './Friend';


const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName="กำลังติดตาม">
      <Tab.Screen name="เพื่อน" component={Friendpage} options={{ headerShown: false }} />
      <Tab.Screen name="กำลังติดตาม" component={HomePage} options={{ headerShown: false }} />
      <Tab.Screen name="สำหรับคุณ" component={Homenoti} options={{ headerShown: false }} />
    </Tab.Navigator>
  );

}

function HomePage() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.view} showsVerticalScrollIndicator={false}>
        <View style={styles.container1}>
          <Postcard></Postcard>
          <Postcard></Postcard>
          <Postcard></Postcard>
          <Postcard></Postcard>
          <Postcard></Postcard>
          <Postcard></Postcard>
          <Postcard></Postcard>
          <Postcard></Postcard>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    padding: 10,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    height: '100%'

  },

});