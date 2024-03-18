import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import LogInScreen from '../screens/LogIn/LogInScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import LikeScreen from '../screens/Like/LikeScreen';
import CartScreen from '../screens/Cart/CartScreen';
import NutritionScreen from '../screens/Details/NutritionScreen';
import DetailScreen from '../screens/Details/DetailScreen';
import MyPage from '../screens/MyPage/MyPage';
import OrderListScreen from '../screens/Order/OrderListScreen';
import PurchaseComplete from '../screens/Purchase/PurchaseComplete';
import PurchaseScreen from '../screens/Purchase/PurchaseScreen';
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Like"
        component={LikeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Nutrition"
        component={NutritionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order"
        component={OrderListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Complete"
        component={PurchaseComplete}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Purchase"
        component={PurchaseScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
