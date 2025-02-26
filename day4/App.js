import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExcerciseExample from './screens/ExcerciseExample';
import ExcerciseScreen from './screens/ExerciseScreen';

export default function App() {
  return (
    <ExcerciseScreen/>
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
