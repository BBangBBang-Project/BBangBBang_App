import React, {useEffect} from 'react';
import {AppRegistry, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LogInScreen from './screens/LogIn/LogInScreen';
import SignUpScreen from './screens/SignUp/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTab from './navigations/BottomTab';

const Stack = createStackNavigator();

function MyStack() {
  return (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  
    useEffect(() => {
      SplashScreen.hide();
    }, []);

    return( 
    <SafeAreaProvider>
      <BottomTab/>
      </SafeAreaProvider>
    );
};

  export default App;