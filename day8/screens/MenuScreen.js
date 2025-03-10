import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const MenuScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Menu Screen</Text>
            <Button 
                    title='Go To Student Screen'
                    onPress={() => navigation.navigate('Student')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f0f0f0', 
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', 
    }
});

export default MenuScreen;
