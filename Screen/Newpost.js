import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list';

function Newpost() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: '1', value: 'อาหารตามสั่ง' },
    { key: '2', value: 'ก๋วยเตี๋ยว' },
    { key: '3', value: 'ส้มตำ' },
    { key: '4', value: 'อาหารทานเล่น' },
    { key: '5', value: 'ของหวาน' },
    { key: '6', value: 'สเต็ก' },
    { key: '7', value: 'บุฟเฟต์'}
  ]

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
          <Text style={{ alignSelf: 'center', fontWeight:'bold'}}>โปรดระบุประเภทอาหาร</Text>

        </View>
        <View style={{ justifyContent: 'center', }}>
          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            search={false}
            defaultOption={{}}
          /></View>

        <View style={{ height: '60%', }}>
         <TouchableOpacity><Image style={{
            alignSelf: 'center',
            marginRight: 10,
            height: 200,
            width: 200,
          }} source={require('../assets/Add-img.png')} /></TouchableOpacity> 
          <TextInput style={{ fontWeight: 'bold' }} placeholder='เพิ่มหัวข้อที่น่าสนใจ' />
          <TextInput style={{ fontWeight: 'bold' }} placeholder='เพิ่มแคปชั่น รีวิว ร้านอาหารของคุณ' />
        </View>
        <View style={{ height: '30%', }}>
          <View style={{ height: '50%', }}>
            <TouchableOpacity style={{ borderRadius: 5, width: '40%', alignItems: 'center', marginBottom: 5 }}><Text style={{ fontWeight: 'bold' }}>เพิ่มตำแหน่งที่ตั้ง</Text></TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity><Text style={{ marginLeft: 18, borderWidth: 1, width: 85, padding: 5 }}>นครราชสีมา</Text></TouchableOpacity>
              <TouchableOpacity><Text style={{ marginLeft: 18, borderWidth: 1, width: 85, padding: 5 }}>อำเภอเมือง</Text></TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.butt}><Text style={{ color: 'white', fontWeight: 'bold' }}>โพสต์</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
    padding: 20,
    width: '100%',
  },

  container1: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
  butt: {
    marginBottom: 30,
    borderWidth: 1,
    marginTop: 15,
    alignSelf: 'center',
    width: "90%",
    height: '35px',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: 'black',
  },

});


export default Newpost
