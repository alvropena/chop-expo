import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Our App</Text>
            <Text style={styles.subtitle}>Let's get you started!</Text>
            <Button title="Get Started" onPress={() => navigation.navigate('Authentication')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default OnboardingScreen;
