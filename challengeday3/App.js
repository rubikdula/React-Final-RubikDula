import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import BoxScreen from './screens/BoxScreenChallenge';

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Home'}} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: 'Profile'}} />
                <Stack.Screen name="BoxScreen" component={BoxScreen} options={{title: 'Box'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

