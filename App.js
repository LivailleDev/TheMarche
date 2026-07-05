import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CartProvider from './src/contexts/CartContext';
import Login from './src/pages/Login/index';
import Sale from './src/pages/Sale/index';
import Cart from './src/pages/Cart/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    // CartProvider wraps the navigator so the cart state is shared across screens.
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Shop" component={Sale} options={{ title: 'The Marché' }} />
          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Your Cart' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
