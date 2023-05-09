import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screens
import Splash from '../screen/Splash'
import Login from '../screen/Login'
import Signup from '../screen/Signup'

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='login'>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;