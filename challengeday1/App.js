import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ExerciseScreen from './screens/ExerciseScreen';

export default function App() {
  return (
    <View style={styles.container}>
    <ExerciseScreen />
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
