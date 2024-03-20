import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStack from './navigations/MainStack';
import AuthStack from './navigations/AuthStack';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

// 로그인 상태를 확인하는 함수
const checkLoginStatus = async () => {
  try {
    const loggedInStatus =  await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  } catch (error) {
    console.log(error);
  }
}

  return (
    <SafeAreaProvider>
      <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
