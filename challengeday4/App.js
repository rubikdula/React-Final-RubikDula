import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IOSProducts from './screens/IOSProducts';
import PCPRoducts from './screens/PCPRoducts';
import ADRProducts from './screens/ADRProducts';
import Products from './screens/Products';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
}

function IOSStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="IOSProducts" component={IOSProducts} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}

function PCStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PCPRoducts" component={PCPRoducts} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}

function ADRStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ADRProducts" component={ADRProducts} />
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="IOSProducts" component={IOSStack} />
        <Drawer.Screen name="PCPRoducts" component={PCStack} />
        <Drawer.Screen name="ADRProducts" component={ADRStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});