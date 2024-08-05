import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../context/UserContext';

const messages = [
    { id: '1', name: 'Hayley', username: '@hayley', message: 'shared a video', time: '4:11 PM', image: 'https://placebacon.net/50/50', status: 'new' },
    { id: '2', name: 'Jillian', username: '@jillian', message: 'Omg', time: 'Yesterday', image: 'https://placebacon.net/51/51', status: 'new' },
    { id: '3', name: 'Jokeekof', username: '@jokeekof', message: 'shared a video', time: 'Wednesday', image: 'https://placebacon.net/52/52' },
    { id: '4', name: 'mads', username: '@mads', message: 'HAHAHA', time: 'Tuesday', image: 'https://placebacon.net/53/53' },
    { id: '5', name: 'Matthew', username: '@matthew', message: 'SI AYYY', time: 'Tuesday', image: 'https://placebacon.net/54/54' },
    { id: '6', name: "What's up", username: '@whatsup', message: 'You shared a video', time: '2/7', image: 'https://placebacon.net/55/55' },
    { id: '7', name: 'evanglitman', username: '@evanglitman', message: 'liked your message', time: '2/5', image: 'https://placebacon.net/56/56' },
    { id: '8', name: 'Katie', username: '@katie', message: 'Say hi to Katie', time: '2/3', image: 'https://placebacon.net/57/57' },
    { id: '9', name: 'keilow', username: '@keilow', message: 'Say hi to keilow', time: '12/29', image: 'https://placebacon.net/58/58' },
];

const MessagesScreen: React.FC = () => {
    const navigation = useNavigation();
    const { user } = useUser(); // Use the useUser hook

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.messageContainer} onPress={() => navigation.navigate('Chat', { name: item.name, username: item.username, image: item.image })}>
            <Image source={{ uri: item.image }} style={styles.profileImage} />
            <View style={styles.messageContent}>
                <View style={styles.messageHeader}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
                <Text style={styles.message}>{item.message}</Text>
                {item.status === 'new' && <View style={styles.newIndicator} />}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Messages</Text>
                <TouchableOpacity>
                    <Text style={styles.headerButton}>+</Text>
                </TouchableOpacity>
            </View>
            {user && (
                <FlatList
                    data={messages}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={styles.messagesList}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerButton: {
        fontSize: 24,
        color: '#000',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    messagesList: {
        flex: 1,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    messageContent: {
        flex: 1,
    },
    messageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 14,
        color: '#999',
    },
    message: {
        fontSize: 14,
        color: '#555',
    },
    newIndicator: {
        width: 10,
        height: 10,
        backgroundColor: '#CE82FF',
        borderRadius: 5,
        position: 'absolute',
        right: 0,
        top: 0,
    },
});

export default MessagesScreen;
