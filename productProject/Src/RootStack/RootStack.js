import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//screens
import mainScreen from '../Screens/MainScreen/MainScreen'
import secondScreen from '../Screens/SecondScreen/SecondScreen'
import DetailScreen from '../Screens/DetailScreen/DetailScreen'
import SplashScreen from '../Screens/SplashScreen/SplashScreen'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SplashScreen" >
        <Stack.Screen name="mainScreen" component={mainScreen} />
        <Stack.Screen name="secondScreen" component={secondScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;