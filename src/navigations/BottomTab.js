import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeScreen from '../screens/Home/HomeScreen';
import LogInScreen from '../screens/LogIn/LogInScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';

const Tab = createBottomTabNavigator();

function CustomTabBarButton({ children, onPress }) {
  return (
    <TouchableOpacity
      style={{
        top: -40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 50,
          backgroundColor: '#FAEBE1', 
          borderColor: '#FFFFFF',
          borderWidth: 4,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
}

function BottomTab() {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#FAEBE1',
          tabBarInactiveTintColor: '#BE4A31',
          tabBarStyle: {
            height: 60 + insets.bottom,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: '#FAEBE1',
            borderRadius: 15,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: () => null,
            tabBarIcon: ({ color }) => <Icon name="home" size={40} color={color} />,
          }}
        />
        <Tab.Screen
          name="Like"
          component={LogInScreen}
          options={{
            headerShown: false,
            tabBarLabel: () => null,
            tabBarIcon: ({ focused, color }) => (
              <Icon2 name="heart" size={40} color={color} />
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="Mypage"
          component={SignUpScreen}
          options={{
            headerShown: false,
            tabBarLabel: () => null,
            tabBarIcon: ({ color }) => <Icon2 name="user" size={40} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTab;
