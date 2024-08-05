// screens/RegisterScreen.tsx
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const RegisterScreen: React.FC = () => {
    const { logIn } = useAuth(); // Mock register by logging in

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Button title="Register" onPress={logIn} />
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
});

export default RegisterScreen;
