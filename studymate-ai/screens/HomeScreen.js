import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ChatScreen from './ChatScreen';
import SummaryScreen from './SummaryScreen';
import FlashcardsScreen from './FlashcardsScreen';
import PlannerScreen from './PlannerScreen';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function HomeScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Chat') {
                        iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                    } else if (route.name === 'Summary') {
                        iconName = focused ? 'document-text' : 'document-text-outline';
                    } else if (route.name === 'Flashcards') {
                        iconName = focused ? 'card' : 'card-outline';
                    } else if (route.name === 'Planner') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Summary" component={SummaryScreen} />
            <Tab.Screen name="Flashcards" component={FlashcardsScreen} />
            <Tab.Screen name="Planner" component={PlannerScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7fafd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#2d3748',
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '80%',
    },
});