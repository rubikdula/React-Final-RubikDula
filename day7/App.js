import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <View styles={styles.container}>
    <MenuScreen> </MenuScreen>
    </View>
  );
}

const Navigator = createStackNavigator(
  {
    Menu: MenuScreen
  },
  {
    initialRouteName: "Menu",
    defaultNavigationOptions: {
      title: "App"
    }
  },

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(navigator);