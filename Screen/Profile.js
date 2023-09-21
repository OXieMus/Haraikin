import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,Image,KeyboardAvoidingView,TextInput} from 'react-native';
import { SimpleGrid } from 'react-native-super-grid';
import Postcard from '../component/postcard';

export default function Profilepage(){
    return (
        <SafeAreaView style={styles.container}>
       <View style={styles.container1}> 
        <Text style={{alignContent: 'center',marginTop: 10, fontSize: 24, fontWeight: 'bold',alignSelf:'center'}}>@Hanninaja</Text>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <Image style={styles.picpro} source={require('../assets/hanni.jpg')} />
        <Text style={{alignSelf:'center', marginLeft:5, }}>Post</Text>
        <Text style={{alignSelf:'center', marginLeft:5, }}>Follower</Text>
        <Text style={{alignSelf:'center', marginLeft:5, }}>Following</Text>
        </View>
        <View style={{flexDirection:'colum',}}>
        <Text style={{ marginLeft:30,fontWeight:'bold' }}>ฮันนินะจ๊ะ</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
        <TouchableOpacity style={styles.buttlogin}><Text style={{color:'white',fontWeight:'bold'}} >แก้ไขโปรไฟล์</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttlogin}><Text style={{color:'white',fontWeight:'bold'}} >เพิ่มเพื่อน</Text></TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.view} showsVerticalScrollIndicator={false}>
        <View style={styles.container2}>
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
       </View>
      </SafeAreaView>
      );
    }
    const styles = StyleSheet.create({
        container: {
         flex:1,
          backgroundColor: '#fff',
          padding: 10,
          
        },
        container1: {
         flex: 2 ,
         backgroundColor: '#fff',
         height:'100%',
        },
        picpro: {
           justifyContent: 'center',
           marginRight:10,
           height: 100,
           width: 100,
           borderRadius:145,
         },
         buttlogin:{
          margin:10,
          width:'30%',
           alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
          borderRadius: 10,
          backgroundColor: 'black',
          alignSelf: 'center'
          },
          container2: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            height: '100%'
        
          }, 
       
      });