// screens/LogInScreen.tsx
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const LogInScreen: React.FC = () => {
    const { logIn } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <Button title="Log In" onPress={logIn} />
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

export default LogInScreen;
