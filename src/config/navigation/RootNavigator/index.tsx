import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../../modules/LoginScreen';
import { routes } from '../../../constants';
import BottomTabNavigator from './../BottomTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
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
};

export default RootNavigator;