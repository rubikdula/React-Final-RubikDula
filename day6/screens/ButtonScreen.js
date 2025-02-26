import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonScreen = () => {
    const [counter, setCounter] = useState(0);
    const [counterT, setCounterT] = useState(0);

    return (
        <View>
            <Text style={styles.textStyle}>Button Screen</Text>
            <Text style={styles.textStyle}>Counter 1: {counter}</Text>
            <Button
                title="Click Me"
                color="purple"
                onPress={() => {
                    setCounter(prev => prev + 1);
                    console.log('Button Clicked', counter + 1);
                }}
            />
            <Text style={styles.textStyle}>Counter 2: {counterT}</Text>
            <TouchableOpacity 
                style={styles.touchableBtn} 
                onPress={() => {
                    setCounterT(prev => prev + 1);
                    console.log('Touchable Element Clicked', counterT + 1);
                }}
            >
                <Text style={styles.textBtn}>Click Touchable Element</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    touchableBtn: {
        backgroundColor: 'purple',
        marginVertical: 15,
        paddingVertical: 20,
        marginHorizontal: 20
    },
    textBtn: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default ButtonScreen;
