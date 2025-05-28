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
        backgroundColor: '#f7fafd',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#2d3748',
        textAlign: 'center',
        letterSpacing: 1,
    },
    chatContainer: {
        flex: 1,
        marginBottom: 16,
        backgroundColor: '#e6ecf5',
        borderRadius: 12,
        padding: 10,
    },
    messageContainer: {
        marginVertical: 6,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        maxWidth: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 2,
    },
    messageText: {
        fontSize: 17,
        color: '#22223b',
    },
    input: {
        height: 44,
        borderColor: '#bfc9d1',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 14,
        marginBottom: 10,
        backgroundColor: '#fff',
        fontSize: 16,
    },
});
