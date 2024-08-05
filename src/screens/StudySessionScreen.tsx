// screens/StudySessionScreen.tsx
import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const StudySessionScreen: React.FC = ({ route }) => {
    const { card } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.question}>{card.question}</Text>
                {card.options.map((option, index) => (
                    <View key={index} style={styles.option}>
                        <Text style={styles.optionText}>{option}</Text>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    option: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
});

export default StudySessionScreen;
