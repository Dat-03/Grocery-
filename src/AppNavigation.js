import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserNavigation from './UserNavigation';
import ShopNavigation from './ShopNavigation';
import {UserContext} from './UserContext';

const AppNavigation = () => {
  const {isLoggedIn} = useContext(UserContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <ShopNavigation /> : <UserNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
