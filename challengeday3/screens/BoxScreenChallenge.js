import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BoxScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                            <View style={styles.infoContainer1}>
                                <Text style={styles.label}>Hello</Text>
                                <Text style={styles.infoText}>How are you</Text>
                            </View>
            
                            <View style={styles.infoContainer2}>
                                <Text style={styles.label}>Fine</Text>
                                <Text style={styles.infoText}>I'm Good</Text>
                            </View>
            
                            <View style={styles.infoContainer3}>
                                <Text style={styles.label}>Great</Text>
                                <Text style={styles.infoText}>Awesome</Text>
                            </View>
            </View>
                            <View style={styles.footer}>
                                <Text style={styles.footerText}>You are on the Box Screen</Text>
                            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
        alignItems: 'center',
    },
    firstcontainer: {
        backgroundColor: '#B3E5FC',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 40,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 40,
        borderWidth: 3,
        borderColor: '#fff',
    },
    name:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#333',
    },
    infoContainer: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 15,
        textAlign: 'center',
    },
    infoContainer1: {
        backgroundColor: '#FF6F61',
        width: '100%',
        padding: 15,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
    },
    infoContainer2: {
        backgroundColor: '#4CAF50',
        width: '100%',
        padding: 15,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
    },
    infoContainer3: {
        backgroundColor: '#2196F3',
        width: '100%',
        padding: 15,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
    },
    label: {
        fontWeight: 'bold',
        color: '#fffff',
        marginBottom: 5,
    },
    infoText: {
        color: '#fffff',
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        color: '#1111',
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    footerText: {
        color: '#007AFF',
        fontWeight: 'bold',
    }
    
});

export default BoxScreen;