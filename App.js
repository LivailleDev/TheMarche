import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import './src/styles/global.css';

import Login from './src/pages/Login/index';
import Home from './src/pages/Home/index';
import Sale from './src/pages/Sale/index';
import Cart from './src/pages/Cart/index';


const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="The Marché" component={Login}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sale" component={Sale} />
        <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;