import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screens
import Splash from '../screen/Splash'
import Login from '../screen/Login'
import Signup from '../screen/Signup'
import Home from '../screen/Home';
import UserProfile from '../screen/UserProfile';
import Profile from '../screen/Profile';
import TimeAvailability from '../screen/TimeAvailability';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="splash">
        <Stack.Screen name="splash" component={Splash} /> 
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="userprofile" component={UserProfile} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="time" component={TimeAvailability} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;