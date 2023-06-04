import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Toast from 'react-native-toast-message';
import Cart from './screens/Cart';
import ConfirmOrder from './screens/ConfirmOrder';
import Payment from './screens/Payment';
import Login from './screens/Login';
import ForgetPassword from './screens/ForgetPassword';
import Verify from './screens/Verify';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='home'
      >
        <Stack.Group>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='productdetails' component={ProductDetails} />
          <Stack.Screen name='cart' component={Cart} />
          <Stack.Screen name='confirmorder' component={ConfirmOrder} />
          <Stack.Screen name='payment' component={Payment} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='signup' component={Signup} />

          {/* Forget Password */}
          <Stack.Screen name='forgetpassword' component={ForgetPassword} />
          <Stack.Screen name='verify' component={Verify} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position='top' />
    </NavigationContainer>
  );
};

export default Main;
