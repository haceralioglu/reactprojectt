import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootStack from './Src/RootStack/RootStack'
import 'react-native-gesture-handler';
export default class App extends React.Component
{
render()
{
  return(
    <RootStack/>
  )
}
}
