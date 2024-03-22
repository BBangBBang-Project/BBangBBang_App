import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogInScreen from '../screens/LogIn/LogInScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;