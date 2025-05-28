import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { generateStudyPlan } from '../services/openaiService'; // Assuming you have a utility function for generating study plans
export default function PlannerScreen() {
    const [inputText, setInputText] = useState('');
    const [studyPlan, setStudyPlan] = useState([]);

    const handleGeneratePlan = async () => {
        if (!inputText.trim()) return;

        try {
            const result = await generateStudyPlan(inputText);
            setStudyPlan(result);
        } catch (error) {
            console.error("Error generating study plan:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Generate Study Plan</Text>
            <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Enter your study goals or topics..."
                multiline
            />
            <Button title="Generate" onPress={handleGeneratePlan} />
            {studyPlan.length > 0 && (
                <FlatList
                    data={studyPlan}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.planItem}>
                            <Text style={styles.planText}>{item.text}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
}