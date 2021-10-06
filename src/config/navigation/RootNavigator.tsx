import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../modules/login/LoginScreen';
import routes from '../../constants/routes';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={routes.login}>
      <Stack.Screen 
        name={routes.login} 
        component={LoginScreen} 
      />
      <Stack.Screen 
        name={routes.tabs} 
        component={BottomTabNavigator}         
      />
    </Stack.Navigator>
  );
}