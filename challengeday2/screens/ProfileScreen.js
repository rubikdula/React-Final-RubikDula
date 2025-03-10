import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import StudentInfo from './StudentInfo';
import Projects from './Projects';

const ProfileScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StudentInfo
                fullName="Rubik Dula"
                position="Student at British Gymnasium of Technology"
                description="Tech enthusiast with a passion for programming, editing, and design."
                profileImage="../assets/pfp.jpg"
            />
            <View style={StyleSheet.projectsContainer}>
                <Projects image="../assets/project.png"/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f0f2f5',
    },
    projectsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
});

export default ProfileScreen;