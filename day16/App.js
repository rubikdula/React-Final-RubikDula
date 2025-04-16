import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDos from './screens/ToDos';
import Comments from './screens/Comments';
import Albums from './screens/Album';
import {NavigatorContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home.js';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigatorContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ToDos" component={ToDos}/>
        <Stack.Screen name="Comments" component={Comments}/>
        <Stack.Screen name="Albums" component={Albums}/>
      </Stack.Navigator>
    </NavigatorContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

