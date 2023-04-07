import React from 'react';
import UserNavigation from './src/UserNavigation';
import ShopNavigation from './src/ShopNavigation';
import AppNavigation from './src/AppNavigation';
import {UserConTextProvider} from './src/UserContext';

const App = () => {
  return (
    <UserConTextProvider>
      <AppNavigation />
    </UserConTextProvider>
  );
};

export default App;
