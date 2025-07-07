import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import * as React from 'react'

const SettingScreen =({navigation})=>  {

   const theme = useColorScheme();
   const isDark = theme == 'dark';

   const backgroundColor = isDark ? "black" : "white";
   const textcolor = isDark ? "white" : "black";

  const handleLogout =()=>{
    navigation.replace('Login');
  }

  return (
    <View style = {[styles.container,]}>
      
      <Text style={styles.lable}>User:</Text>
      <View style={styles.userEmail}>
      <Text style={styles.email}>test@gmail.com</Text>
      </View>
      <View style={styles.logoutcontainer}>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      </View>
      </View>
  )
}


const styles = StyleSheet.create({
            container:{
            width: '100%',
            height: '100%',  
            flexBox: 1,
            backgroundColor:'#CCE0DF',
            gap: 5,
            },
            lable:{
              fontSize: 24,
              fontFamily: 'CaveatBold'
          },
          email:{
            fontSize: 24,
            fontFamily: 'CaveatBold'
          },userEmail:{
            width: '60%',
            borderBottomWidth:1,
            paddingLeft: 30,
            borderRadius:20,
          
          },
          logoutcontainer:{
            width: '80%',
            height: '80%',
            paddingTop: 50,
            paddingLeft: '40',
          },
          button:{
            width: '50%',
            height: '10%',
            borderWidth: 1,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
          },
          buttonText:{
           fontSize: 24,
              fontFamily: 'CaveatBold',
            color: 'white',
          },
          text:{
              fontSize: 30,
              fontWeight: 'bold',
              
            },
          

})

export default SettingScreen;