import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
    useEffect(() => {
      SplashScreen.hide();
    }, []);
};

  export default App;