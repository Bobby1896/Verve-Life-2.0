import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import Carousel from './components/Carousel';
import Login from './components/Login';
import Register from './components/Register';
import MessageVerification from './components/MessageVerification';
import PinCreation from './components/PinCreation';
import DashBoard from './components/DashBoard';
import BottomTabNavigator from './components/BottomTabNavigator';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Group>
          <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name="Carousel" component={Carousel} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="MessageVerification"
            component={MessageVerification}
          />
          <Stack.Screen name="PinCreation" component={PinCreation} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
