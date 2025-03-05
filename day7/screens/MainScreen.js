import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MainScreen=()=>{
    <View>
        <Text style={styles.textStyle}>Welcome to Main Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20
    }
})

export default MainScreen;