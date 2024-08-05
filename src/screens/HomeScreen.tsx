import { useState, useCallback } from 'react';
import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList, RefreshControl } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const { height } = Dimensions.get('window');

const forYouCardsData = [
    {
        id: '1',
        question: 'Who is Abraham Lincoln?',
        options: ['Ex-USA President', 'Atomic Bomb Inventor', 'CEO of Coca-Cola', 'Serial Killer'],
        correct: 0,
        image: 'https://placebacon.net/30/30',
        author: 'Ricardo Angulo',
        showAuthor: true,
    },
    {
        id: '2',
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        correct: 2,
        image: 'https://placebacon.net/30/30',
        author: 'John Doe',
        showAuthor: false,
    },
    // Add more cards here
];

const followingCardsData = [
    {
        id: '3',
        question: 'What is the largest planet?',
        options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
        correct: 1,
        image: 'https://placebacon.net/30/30',
        author: 'Jane Doe',
        showAuthor: true,
    },
    {
        id: '4',
        question: 'What is the chemical symbol for water?',
        options: ['O2', 'H2O', 'CO2', 'H2'],
        correct: 1,
        image: 'https://placebacon.net/30/30',
        author: 'Mark Smith',
        showAuthor: false,
    },
    // Add more cards here
];

const HomeScreen: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState('For You');
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: number | null }>({});
    const [refreshing, setRefreshing] = useState(false);

    const navigation = useNavigation<HomeScreenNavigationProp>(); // Specify the type here

    const handleOptionSelect = (cardId: string, optionIndex: number) => {
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [cardId]: optionIndex,
        }));
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // Simulate fetching new data
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.tagsContainer}>
                    <View style={styles.tag}>
                        <Text style={styles.tagText}>📐 Math</Text>
                    </View>
                    <View style={styles.tag}>
                        <Text style={styles.tagText}>📜 History</Text>
                    </View>
                    <View style={styles.tag}>
                        <Text style={styles.tagText}>💻 Coding</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={styles.moreOptions}>⋮</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.question}>{item.question}</Text>
                {item.options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionButton,
                            selectedOptions[item.id] === index && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect(item.id, index)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedOptions[item.id] === index && styles.selectedOptionText,
                            ]}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.cardFooter}>
                {item.showAuthor && <Text style={styles.studiedBy}>✨ Studied by {item.author}</Text>}
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconButton}>
                        <AntDesign name="hearto" size={24} color="#CE82FF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <AntDesign name="like2" size={24} color="#CE82FF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <AntDesign name="dislike2" size={24} color="#CE82FF" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="volume-high-outline" size={24} color="#000" />
                </TouchableOpacity>
                <View style={styles.headerTabs}>
                    <TouchableOpacity
                        style={[styles.tab, selectedTab === 'For You' && styles.activeTab]}
                        onPress={() => setSelectedTab('For You')}
                    >
                        <Text style={[styles.tabText, selectedTab === 'For You' && styles.activeTabText]}>For You</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, selectedTab === 'Following' && styles.activeTab]}
                        onPress={() => setSelectedTab('Following')}
                    >
                        <Text style={[styles.tabText, selectedTab === 'Following' && styles.activeTabText]}>Following</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <Ionicons name="search-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={selectedTab === 'For You' ? forYouCardsData : followingCardsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                snapToAlignment="start"
                decelerationRate="fast"
                snapToInterval={height}
                showsVerticalScrollIndicator={false}
                pagingEnabled
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
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
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    headerButton: {
        fontSize: 24,
        color: '#000',
    },
    headerTabs: {
        flexDirection: 'row',
        backgroundColor: 'rgba(206, 130, 255, 0.13)',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 6,
    },
    tab: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    activeTab: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    tabText: {
        fontSize: 18,
        color: '#CE82FF',
    },
    activeTabText: {
        color: '#CE82FF',
        fontWeight: 'bold',
    },
    card: {
        height: height - 250,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginHorizontal: 20,
        marginVertical: 20,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    studiedBy: {
        fontSize: 14,
        color: '#555',
    },
    moreOptions: {
        fontSize: 24,
        color: '#000',
    },
    cardBody: {
        flex: 1,
        justifyContent: 'center',
    },
    question: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
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
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    selectedOption: {
        backgroundColor: '#F0E4FF',
        borderColor: '#CE82FF',
    },
    optionText: {
        fontSize: 18,
        color: '#333',
    },
    selectedOptionText: {
        color: '#CE82FF',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    iconButton: {
        marginLeft: 15,
    },
    tagsContainer: {
        flexDirection: 'row',
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
