import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { summarizeText } from '../services/openaiService'; // Assuming you have a utility function for summarization

export default function SummaryScreen(){
    const [inputText, setInputText] = useState('');
    const [summary, setSummary] = useState('');

    const handleSummarize = async () => {
        if (!inputText.trim()) return;

        try {
            const result = await summarizeText(inputText);
            setSummary(result);
        } catch (error) {
            console.error("Error summarizing text:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Summarize Your Text</Text>
            <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Enter text to summarize..."
                multiline
            />
            <Button title="Summarize" onPress={handleSummarize} />
            {summary ? (
                <View style={styles.summaryContainer}>
                    <Text style={styles.summaryTitle}>Summary:</Text>
                    <Text style={styles.summaryText}>{summary}</Text>
                </View>
            ) : null}
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
    summaryContainer: {
        marginTop: 20,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    summaryText: {
        fontSize: 16,
        color: '#333',
    },
});