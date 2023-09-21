import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Navigationbar from './component/navbar';
import Registerpage from './Screen/Register';
import Loginpage from './Screen/Login';
import AuthContextProvider from './contexts/authcontexts'


const Stack = createStackNavigator();

export default function App() {

  return (
  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Registerpage">
          <Stack.Screen name="Login" component={Loginpage} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Registerpage} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={Navigationbar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },

});
