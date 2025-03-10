import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ProfileScreen />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default App;