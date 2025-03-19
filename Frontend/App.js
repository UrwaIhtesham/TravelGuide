import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Pages/MainPage/SplashScreen';
import SignUp from './Pages/SignUp/SignUp';
import AddEmergencyContact from './Pages/SignUp/AddEmergencyContact';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import Login from './Pages/LogIn/LogIn';
import StartRide1 from './Pages/StartRide/StartRide1';
import StartRide2 from './Pages/StartRide/StartRide2';
import StartRide3 from './Pages/StartRide/StartRide3';
import UserProfile from './Pages/UserProfile/UserProfile';
import AboutOurPage from './SVG/AboutPageIcons/aboutOurPage';
import AboutScreen from './Pages/AboutScreen/aboutScreen';
import Checkin from './SVG/HomePageIcons/Check-in';
import CheckIn from './Pages/Features/checkin';
import LowBattery from './Pages/Features/LowBattery';
import VoiceCommand from './Pages/Features/VoiceCommand';
import PanicMode from './Pages/Features/panicmode';
import VerifyEmail from './Pages/utils/Verify';

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
        <Stack.Screen
        name="StartRide1"
        component={StartRide1}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="StartRide2"
        component={StartRide2}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="StartRide3"
        component={StartRide3}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name = "AboutScreen"
        component={AboutScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="CheckIn"
        component={CheckIn}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name='LowBattery'
        component={LowBattery}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name='VoiceCommand'
        component={VoiceCommand}
        options={{ headerShown: false}}
        />
        <Stack.Screen
        name='PanicMode'
        component={PanicMode}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name='VerifyEmail'
        component={VerifyEmail}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;