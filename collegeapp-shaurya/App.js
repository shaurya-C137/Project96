import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import InformationScreen from './screens/InformationScreen';
import ContentScreen from './screens/ContentScreen';
import UserForm from './screens/api.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="API" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Content" component={ContentScreen} />
       <Stack.Screen name="API" component={UserForm} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      backgroundColor: '#fff',
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//  });
