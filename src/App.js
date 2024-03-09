import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import LogInScreen from './screens/LogIn/LogInScreen';
import SignUpScreen from './screens/SignUp/SignUpScreen';

const App = () => {
  
    useEffect(() => {
      SplashScreen.hide();
    }, []);
    return(
      <SignUpScreen></SignUpScreen>
    );
};

  export default App;