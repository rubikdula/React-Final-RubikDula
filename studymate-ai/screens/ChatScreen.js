import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from '@react-navigation/native';

export default function ChatScreen() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState([]);

    const handleAsk = async () => {
        if (!input.trim() === '') return;

        // Simulate an API call
        const newResponse = { id: Date.now().toString(), text: input };
        setResponse(prev => [...prev, newResponse]);
        setInput('');

        // Simulate a delay for the response
        setTimeout(() => {
            Speech.speak(`You asked: ${newResponse.text}`);
        }, 1000);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Chat with StudyMate AI</Text>
            <ScrollView style={styles.chatContainer}>
                <FlatList
                    data={response}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageText}>{item.text}</Text>
                        </View>
                    )}
                />
            </ScrollView>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                placeholder="Type your question..."
            />
            <Button title="Ask" onPress={handleAsk} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    chatContainer: {
        flex: 1,
        marginBottom: 20,
    },
    messageContainer: {
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
    messageText: {
        fontSize: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});
