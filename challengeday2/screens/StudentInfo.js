import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StudentInfo = ({ fullName, position, description, profileImage }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: profileImage }} style={styles.image} />
            <Text style={styles.fullName}>{fullName}</Text>
            <Text style={styles.position}>{position}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    fullName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    position: {
        fontSize: 16,
        color: '#666',
        marginVertical: 5,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: '#444',
    }
});

export default StudentInfo;