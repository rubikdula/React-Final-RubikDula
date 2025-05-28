import axios from 'axios';
import dotenv from 'dotenv';
import { API_KEY } from '@env';

const ENDPOINT = 'https://api.openai.com/v1/chat/completions';

export const fetchChatResponse = async (messages) => {
    try {
        const response = await axios.post(
            ENDPOINT,
            {
                model: 'gpt-3.5-turbo',
                messages: messages,
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching chat response:', error);
        throw error;
    }
};

 export async function askQuestion(question) {
    const messages = [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: question },
    ];

    try {
        const response = await fetchChatResponse(messages);
        return response;
    } catch (error) {
        console.error('Error asking question:', error);
        throw error;
    }
}
export async function generateStudyPlan(input) {
    const messages = [
        { role: 'system', content: 'You are a study planner.' },
        { role: 'user', content: `Create a study plan based on the following input: ${input}` },
    ];

    try {
        const response = await fetchChatResponse(messages);
        return response;
    } catch (error) {
        console.error('Error generating study plan:', error);
        throw error;
    }
}
export async function generateFlashcards(input) {
    const messages = [
        { role: 'system', content: 'You are a flashcard generator.' },
        { role: 'user', content: `Generate flashcards based on the following input: ${input}` },
    ];

    try {
        const response = await fetchChatResponse(messages);
        return response;
    } catch (error) {
        console.error('Error generating flashcards:', error);
        throw error;
    }
}