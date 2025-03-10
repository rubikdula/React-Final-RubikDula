import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import StudentScreen from './screens/StudentScreen';
import StudentDetails from './components/StudentDetails';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Menu">
                <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Main Menu' }} />
                <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Student Profile' }} />
                <Stack.Screen name="StudentDetails" component={StudentDetails} options={{ title: 'Student Detail' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
