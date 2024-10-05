import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';  
import Welcome from '../screens/Welcome'; // Import Welcome
import Home from '../screens/Home';      
import WorldClock from '../screens/WorldClock'; // Import WorldClock

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} /> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WorldClock" component={WorldClock} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
