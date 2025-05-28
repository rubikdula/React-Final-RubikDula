import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { generateFlashcards } from '../services/openaiService';

export default function FlashcardsScreen() {
    const [inputText, setInputText] = useState('');
    const [flashcards, setFlashcards] = useState([]);

    const handleGenerateFlashcards = async () => {
        if (!inputText.trim()) return;

        try {
            const result = await generateFlashcards(inputText);
            setFlashcards(result);
        } catch (error) {
            console.error("Error generating flashcards:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Generate Flashcards</Text>
            <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Enter topic or text for flashcards..."
                multiline
            />
            <Button title="Generate" onPress={handleGenerateFlashcards} />
            {flashcards.length > 0 && (
                <FlatList
                    data={flashcards}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.flashcard}>
                            <Text style={styles.question}>{item.question}</Text>
                            <Text style={styles.answer}>{item.answer}</Text>
                        </View>
                    )}
                />
            )}
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
    input: {
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    flashcard: {
        padding: 15,
        marginVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    answer: {
        fontSize: 16,
        color: '#555',
    },
});