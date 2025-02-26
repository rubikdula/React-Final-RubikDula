import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MenuScreen=()=>{
    <View>
        <Text style={styles.textStyle}>Welcome to Menu Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20
    }
})

export default MenuScreen;