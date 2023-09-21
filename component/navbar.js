import React from 'react';
import 'react-native-gesture-handler';
import { View, Image, StyleSheet,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../Screen/Home';
import Mappage from '../Screen/Map';
import Profilepage from '../Screen/Profile';
import Bot from '../Screen/Bot';
import Newpost from '../Screen/Newpost';

const nav = createBottomTabNavigator();

const Navigationbar = () => {
    return (
            <nav.Navigator screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#000',
                
                    height: 60,
                    
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.45,
                    shadowRadius: 3,
                    elevation: 5,
                    paddingTop: 5,
                    paddingBottom: 5
                },
                tabBarLabelStyle: {
                    fontSize: 14,   
                },
                headerShown: false,
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: '#F5E7C5'

            }}>
                <nav.Screen name="Home" component={HomeScreen}
                    options={{

                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={style.tabcontainer}>  
                                 <Ionicons name="home" size={30} color="white" />
                                </View>);
                        }
                    }}
                />

               <nav.Screen name="Map" component={Mappage}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={style.tabcontainer}>
                                    <FontAwesome5 name="map-marked-alt" size={30} color="white" />   
                                </View>);
                        }
                    }}
                />
                 <nav.Screen name="New Post" component={Newpost} 
                    options={{
                        title: "",
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={style.tabcontainer}>  
<Ionicons name="ios-add-circle-outline" size={40} color="white"  style={{ position:'absolute'}}/>
                                </View>);
                        }
                    }}
                />
                 <nav.Screen name="Lemon" component={Bot} 
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={style.tabcontainer}>
                                    <Ionicons name="ios-chatbubble-ellipses" size={30} color="white" />    
                                </View>);
                        }
                    }}
                />

               <nav.Screen name="Profile" component={Profilepage}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={style.tabcontainer}>  
                                <Ionicons name="person" size={30} color="white" />  
                                </View>);
                        }
                    }}
                />

                
            </nav.Navigator>
    );
};

const style = StyleSheet.create({
    tabcontainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
});

export default Navigationbar;