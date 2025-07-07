import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TaskScreen from '../screens/TaskScreen';
import SettingScreen from '../screens/SettingScreen';
import { Image } from 'react-native';
import homeIcon from '../assets/icons/home.png';
import settingIcon from '../assets/icons/settings.png'



const Tab = createBottomTabNavigator();

const TabNavigator =()=>{
    //Tasks
    //setting
    return (
  
 <Tab.Navigator initialRouteName={'Task'}>
      <Tab.Screen name='Task' component={TaskScreen}  
      options={{
        title: 'TM',
        tabBarIcon:  ({focused}) => {
        return(
          <Image source={homeIcon} style={{height: 40, width: 40, }}/>
        )
        },
      
    }} 
      />
      <Tab.Screen name='Setting' component={SettingScreen} 
      options={{
        title: 'Settings',
       tabBarIcon:  ({focused}) => {
         return(
           <Image source={settingIcon} style={{ height: 40, width: 40,}}/>
         )
          },
      }} 
      />
    </Tab.Navigator>
  
)}
export default TabNavigator;