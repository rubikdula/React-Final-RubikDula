import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
                <View style={styles.firstcontainer}>
                    <Image source={require('../assets/pfp.jpg')} style={styles.profileImage}/>

                    <Text style={styles.name}>Elaine Alvarez</Text>
                </View>


                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.infoText}>salmanbutt@gmail.com</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Graduation Date:</Text>
                    <Text style={styles.infoText}>Dec 2018</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Degrees:</Text>
                    <Text style={styles.infoText}>
                        Bachelors
                        Masters
                        Post Graduate
                        PhD
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>You are on the ProfileScreen</Text>
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
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
    },
    label: {
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 5,
    },
    infoText: {
        color: '#555',
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

export default ProfileScreen;