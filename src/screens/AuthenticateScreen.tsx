import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useAuth } from '../context/AuthContext';

const AuthenticationScreen: React.FC = () => {
    const { logIn, signUp } = useAuth();
    const [isSignUp, setIsSignUp] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleAuth = () => {
        if (isSignUp) {
            signUp(email, password);
        } else {
            logIn(email, password);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Log In'}</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title={isSignUp ? 'Sign Up' : 'Log In'} onPress={handleAuth} />
            <Button
                title={isSignUp ? 'Switch to Log In' : 'Switch to Sign Up'}
                onPress={() => setIsSignUp(!isSignUp)}
            />
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
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default AuthenticationScreen;
