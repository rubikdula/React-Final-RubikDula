import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Projects = ({ image }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
});

export default Projects;