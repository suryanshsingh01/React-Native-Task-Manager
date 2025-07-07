import { Text, View } from 'react-native'
import React, {Component} from 'react'
import SplashScreen from 'react-native-splash-screen';




class Splash extends Component {
  componentDidMount() {
      
       setTimeout(() => {
       SplashScreen.hide();  //  for splash screen hide  
       },3000);   // 3000 = 3seconds
       this.props.navigation.replace('Login');
    return () => clearTimeout(timer);  // will clean
  }

  render() {
    return (
      <View>
        <Text style={{
          margin: 20,
          fontSize: 40,
          fontWeight: 'bold', //lowercase
          color: 'black',
          textAlign: 'center'
        }}>
          App
        </Text>
      </View>
    );
  }
}


export default Splash;