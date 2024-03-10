import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LogInScreen from './screens/LogIn/LogInScreen';
import SignUpScreen from './screens/SignUp/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
      <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    );
};

  export default App;