import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignupOTP from './SignupOTP';
import SignupPassword from './SignupPassword';
import Welcome from './Welcome';

const Stack = createNativeStackNavigator();

const UserNavigation = props => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignupOTP" component={SignupOTP} />
      <Stack.Screen name="SignupPassword" component={SignupPassword} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
