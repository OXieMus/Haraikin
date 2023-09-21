import { StyleSheet, Text, View , KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import Registerpage from './Register';
import Navigationbar from '../component/navbar';


export default function Loginpage({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View  style={styles.containerlogin}>
      <Text style={styles.textdecro}>เข้าสู่ระบบ</Text>
      <TextInput style={styles.inputtext} placeholder='กรอกชื่อผู้ใช้'placeholderTextColor="white"  />
      <TextInput style={styles.inputtext} placeholder='กรอกรหัสผ่าน' placeholderTextColor="white"/>
      <TouchableOpacity style={styles.buttlogin}><Text style={{color:'white',fontWeight:'bold'}} onPress={() => navigation.navigate('Main')}>ล็อคอิน</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttlogin} onPress={() => navigation.navigate('Register')}>
          <Text style={{color:'white',fontWeight:'bold'}}>สมัคร</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
    
  );
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
  containerlogin: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: 'white',
    padding: 8,
    width:'150%',
    
  },
  textdecro: {
    alignSelf:"center",
  width:'249px',
  height:'63px',
  color:'black',
  fontSize:30,
  fontWeight: 'bold',
  marginBottom:50,
  },
  inputtext: {
    padding: 8,
    margin: 10 ,   
    borderRadius:10,
    height: '50px',
    width:'350px',
    color: 'white',
    borderRadius: 10,
    backgroundColor:'#000',
  },
  buttlogin:{
    marginTop:20,
    width:'30%',
     alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    alignSelf: 'center'
    },
   
});
