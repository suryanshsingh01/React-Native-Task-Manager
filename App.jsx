import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';

import TabNavigator from './src/navigations/AppNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>          
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash"
          component={SplashScreen}
          options={{ heanderShown: false}}
          />     
          <Stack.Screen 
           name="Login" 
           component={LoginScreen}
           options={{headerShown: false}} />
          
          <Stack.Screen
           name="Task"
           component={TabNavigator}              //file in the navigation AppNavigation
           options={{headerShown: false}}
           /> 
           
          
      </Stack.Navigator>
    </NavigationContainer>
  );  {/*  shifting from   splashscreen ==> LoginScreen */}
};

export default App;