import { StyleSheet, Text,TextInput, TouchableOpacity,Alert, View } from 'react-native'
import React, { useState } from 'react'


const LoginScreen = props => {

  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState('');
  const {navigation} = props;

  const handleLogin =()=>{

    const Gemail = email.trim();
    const Ppassword = password.trim();

    if(Gemail === 'test@gmail.com' && Ppassword === '123456') {
      navigation.navigate('Task');               //send to task home screen
    } else{
      Alert.alert('Invalid ','Please check your email and password.');
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.logincontainer}>
        <Text style={Styles.headingText}>LoginScreen</Text>
        <View style={Styles.form}>
          <View style={{paddingTop: 25}}>
          <Text style={{padding: 2,fontFamily: 'CaveatBold',fontSize: 20}}>Email</Text>
          <TextInput style={Styles.TextInput} value={email} onChangeText={setEmail} placeholder='Email' placeholderTextColor="#999" autoCapitalize='none' />
          </View>
          <View style={{paddingTop: 5}}>
          <Text style={{padding: 5,fontFamily: 'CaveatBold',fontSize: 20}}>Password</Text>
          <TextInput style={Styles.TextInput} value={password} onChangeText={setPassword} placeholder='Password' placeholderTextColor="#999" secureTextEntry />
          </View>
          <TouchableOpacity style={Styles.loginButton} onPress={handleLogin}>
            <Text style={{fontFamily: 'CaveatBold',fontSize: 18}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#CCE0DF', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  logincontainer:{
    width: '80%',
    height: '70%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
     borderColor:'black',
     alignItems: 'center'
    },
    headingText:{
      
      padding: 50,
      fontFamily: 'CaveatBold',
      fontSize: 25,
    },
    form:{
      width: '90%',
      height: '60%',
      padding:20,
      marginBottom: 20,
      borderWidth:1,
      borderRadius: 20,
      gap: 20,
      backgroundColor: '#BCCECF',
    },
    TextInput:{
      
      backgroundColor: 'white',
      height: 45,
      color:'#333',
      borderWidth:1,
      borderColor:'black',
      borderRadius:10,
      paddingLeft:10,
      flexDirection: 'row',
      fontFamily: 'CaveatBold',
    },
    loginButton:{
      padding: 10,
      width: '100%',
      height: 50,
      backgroundColor: '#35B78B',
       alignItems:'center',
       justifyContent: 'center',
       borderWidth:1,
       borderRadius: 10,
      
      }
})
