import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Pages/MainPage/SplashScreen';
import SignUp from './Pages/SignUp/SignUp';
import AddEmergencyContact from './Pages/SignUp/AddEmergencyContact';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import Login from './Pages/LogIn/LogIn';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false}} 
        />
        <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false}}
        />
        <Stack.Screen
        name="AddEmergencyContact"
        component={AddEmergencyContact}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;