// screens/HomeScreen.tsx
import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Text style={styles.headerButton}>☰</Text>
                </TouchableOpacity>
                <View style={styles.headerTabs}>
                    <TouchableOpacity style={styles.tab}>
                        <Text style={styles.tabTextActive}>For you</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tab}>
                        <Text style={styles.tabText}>Following</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.headerButton}>🔍</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Image source={{ uri: 'https://placekitten.com/30/30' }} style={styles.profileImage} />
                        <Text style={styles.studiedBy}>Studied by Ricardo Angulo</Text>
                        <TouchableOpacity>
                            <Text style={styles.moreOptions}>⋮</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.question}>Who is <Text style={styles.highlight}>Abraham Lincoln</Text>?</Text>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.optionText}>Ex-USA President</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
                        <Text style={[styles.optionText, styles.selectedOptionText]}>Atomic Bomb Inventor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.optionText}>CEO of Coca-Cola</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionButton}>
                        <Text style={styles.optionText}>Serial Killer</Text>
                    </TouchableOpacity>
                    <ScrollView horizontal={true} style={styles.tagsContainer} showsHorizontalScrollIndicator={false}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>📐 Math</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>📜 History</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>💻 Coding</Text>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    headerTabs: {
        flexDirection: 'row',
    },
    tab: {
        marginHorizontal: 10,
    },
    tabText: {
        fontSize: 16,
        color: '#A9A9A9',
    },
    tabTextActive: {
        fontSize: 16,
        color: '#CE82FF',
        borderBottomWidth: 2,
        borderBottomColor: '#CE82FF',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    card: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 20,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    studiedBy: {
        flex: 1,
        fontSize: 14,
        color: '#555',
    },
    moreOptions: {
        fontSize: 24,
        color: '#000',
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    highlight: {
        color: '#CE82FF',
    },
    optionButton: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 10,
        alignItems: 'center',
    },
    selectedOption: {
        backgroundColor: 'rgba(206, 130, 255, 0.13)',
        borderColor: '#CE82FF',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    selectedOptionText: {
        color: '#CE82FF',
    },
    tagsContainer: {
        marginTop: 20,
    },
    tag: {
        backgroundColor: 'rgba(206, 130, 255, 0.13)',
        borderColor: '#CE82FF',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginRight: 10,
    },
    tagText: {
        color: '#CE82FF',
        fontWeight: 'bold',
    },
});

export default HomeScreen;
