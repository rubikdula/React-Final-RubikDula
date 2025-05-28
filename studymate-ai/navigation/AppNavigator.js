import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();
export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Chat">
            <Stack.Screen 
                name="Chat" 
                component={ChatScreen} 
                options={{ title: 'StudyMate AI Chat' }} 
            />
        </Stack.Navigator>
    );
}