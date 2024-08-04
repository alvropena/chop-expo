// screens/SearchScreen.tsx
import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const SearchScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Type here"
                    placeholderTextColor="#A9A9A9"
                />
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Your last searches</Text>
                        <TouchableOpacity>
                            <Text style={styles.clearButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.tagContainer}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>📐 Math</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>📜 History</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>💻 Coding</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>🏉 Rugby</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>⚽ Soccer</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>🍲 Peruvian Food</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>✨ Astronomy</Text>
                        </View>
                    </ScrollView>
                    <TouchableOpacity>
                        <Text style={styles.viewMoreText}>Ver más ⌄</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Topics you could like</Text>
                        <TouchableOpacity>
                            <Text style={styles.clearButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.tagContainer}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>📐 Math</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>📜 History</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>💻 Coding</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>🏉 Rugby</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>⚽ Soccer</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>🍲 Peruvian Food</Text>
                        </View>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>✨ Astronomy</Text>
                        </View>
                    </ScrollView>
                    <TouchableOpacity>
                        <Text style={styles.viewMoreText}>Ver más ⌄</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent searches</Text>
                    <View style={styles.recentSearch}>
                        <Text style={styles.recentSearchText}>🕒 Erika Lewin</Text>
                        <TouchableOpacity>
                            <Text style={styles.clearButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recentSearch}>
                        <Text style={styles.recentSearchText}>🕒 Singrid Herrera</Text>
                        <TouchableOpacity>
                            <Text style={styles.clearButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recentSearch}>
                        <Text style={styles.recentSearchText}>🕒 Marisol Trujillo</Text>
                        <TouchableOpacity>
                            <Text style={styles.clearButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recentSearch}>
                        <Text style={styles.recentSearchText}>🕒 Eduardo Echevarría</Text>
                        <TouchableOpacity>
                            <Text style={styles.clearButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recentSearch}>
                        <Text style={styles.recentSearchText}>🕒 Alvaro Peña</Text>
                        <TouchableOpacity>
                            <Text style={styles.clearButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recentSearch}>
                        <Text style={styles.recentSearchText}>🕒 Eugenio Derbez</Text>
                        <TouchableOpacity>
                            <Text style={styles.clearButtonText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.viewMoreText}>Ver más ⌄</Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    backButton: {
        marginRight: 10,
    },
    backButtonText: {
        fontSize: 18,
        color: '#CE82FF',
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
        paddingHorizontal: 15,
        color: '#000',
    },
    scrollContainer: {
        flex: 1,
    },
    section: {
        margin: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    clearButtonText: {
        fontSize: 16,
        color: '#CE82FF',
    },
    tagContainer: {
        flexDirection: 'row',
        marginTop: 10,
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
    viewMoreText: {
        marginTop: 10,
        fontSize: 16,
        color: '#CE82FF',
        alignSelf: 'center',
    },
    recentSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    recentSearchText: {
        fontSize: 16,
        color: '#555',
    },
});

export default SearchScreen;
