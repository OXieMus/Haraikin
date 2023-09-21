import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../util/firebase';




export default function Registerpage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user)
        console.log("Registration successful")
      })
      .catch(err => console.log(err.message))

    console.log('Form submitted successfully');
  };

  return (




    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerlogin}>
        <Text style={styles.textdecro}>สมัครสมาชิก</Text>
        <TextInput style={styles.inputtext} placeholder='กรอกชื่อผู้ใช้(น้อยกว่า16ตัวอักษร)' placeholderTextColor="white" />
        <TextInput style={styles.inputtext} placeholder='กรอกอีเมล' placeholderTextColor="white" onChangeText={setEmail} />
        <TextInput style={styles.inputtext} placeholder='กรอกรหัสผ่าน' placeholderTextColor="white" onChangeText={setPassword} />
        <TouchableOpacity style={styles.buttlogin} onPress={handleSignUp}><Text style={{ color: 'white', fontWeight: 'bold' }}>สมัคร</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttlogin} onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>กลับ</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 80,

    width: '100%',
  },
  containerlogin: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    width: '150%',

  },
  textdecro: {
    alignSelf: "center",
    width: '249px',
    height: '63px',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputtext: {
    padding: 8,
    margin: 10,
    borderRadius: 10,
    height: '50px',
    width: '350px',
    color: 'white',
    borderRadius: 10,
    backgroundColor: '#000',
  },
  buttlogin: {
    marginTop: 20,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    alignSelf: 'center'
  },
});
