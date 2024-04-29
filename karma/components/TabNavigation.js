import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native'
import About from '../screens/About';
import Donate from '../screens/Donate';
import Home from '../screens/Home';
import Activity from '../screens/Activity';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({route}) =>({
            headerShown:false,
            tabBarIcon:({focused, color, size})=>{
                let iconName;
                if(route.name === 'Home'){
                    iconName = focused?'home':'home-outline';
                }
                else if(route.name === 'Donate'){
                    iconName = focused?'hand-right':'hand-right-outline';
                }
                else if(route.name === 'About'){
                    iconName = focused?'settings':'settings-outline';
                }
                else if(route.name === 'Activities'){
                    iconName = focused?'bulb':'bulb-outline';
                }

                const iconColor = focused ? '#4863D3' : '#757575';
                
                return <Ionicons name={iconName} size={30} color={iconColor}/>
            },
            tabBarOptions:{
                activeTintColor: 'yellow',
                inactiveTintColor: 'gray',
            },
            tabBarStyle: { backgroundColor: 'white',
            height:65,paddingBottom: 8,paddingTop: 8,
        }})}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Activities' component={Activity} />
            <Tab.Screen name='Donate' component={Donate} />
            <Tab.Screen name='About' component={About} />
            
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default TabNavigation