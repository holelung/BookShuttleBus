import React,{ useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import LoginScreen from './screens/loginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  
});


export default App;
