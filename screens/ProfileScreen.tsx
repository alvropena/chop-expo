// screens/ProfileScreen.tsx
import * as React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: 'https://placekitten.com/200/200' }}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Alonso Rojas</Text>
                <Text style={styles.profileHandle}>@alonso24rojas</Text>

                <View style={styles.profileStats}>
                    <TouchableOpacity style={styles.stat} onPress={() => navigation.navigate('Followers')}>
                        <Text style={styles.statNumber}>360</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stat} onPress={() => navigation.navigate('Following')}>
                        <Text style={styles.statNumber}>90</Text>
                        <Text style={styles.statLabel}>Following</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.stat} onPress={() => navigation.navigate('Streaks')}>
                        <Text style={styles.statNumber}>7</Text>
                        <Text style={styles.statLabel}>Streaks</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileButton}>
                    <TouchableOpacity style={styles.followButton} onPress={() => { }}>
                        <Text style={styles.followButtonText}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.interestSection}>
                <Text style={styles.sectionTitle}>Topics of interest</Text>
                <ScrollView horizontal={true} style={styles.interests} showsHorizontalScrollIndicator={false}>
                    <View style={styles.interest}>
                        <Text style={styles.interestText}>📐 Math</Text>
                    </View>
                    <View style={styles.interest}>
                        <Text style={styles.interestText}>📜 History</Text>
                    </View>
                    <View style={styles.interest}>
                        <Text style={styles.interestText}>💻 Coding</Text>
                    </View>
                    <View style={styles.interest}>
                        <Text style={styles.interestText}>🏉 Rugby</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.xpSection}>
                <Text style={styles.sectionTitle}>XP this week</Text>
                {/* Replace with actual chart component */}
                <View style={styles.chart}>
                    <Text>Chart Component</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileSection: {
        alignItems: 'center',
        margin: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileHandle: {
        fontSize: 16,
        color: 'gray',
    },
    profileButton: {
        marginVertical: 10,
        width: '80%',
    },
    profileStats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    stat: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 16,
        color: 'gray',
    },
    interestSection: {
        margin: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    interests: {
        flexDirection: 'row',
    },
    interest: {
        backgroundColor: 'rgba(206, 130, 255, 0.13)', // Light purple with 13% opacity
        borderColor: '#CE82FF', // Border color
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 20, // Less rounded corners
        height: 30,
        justifyContent: 'center',
        marginRight: 10,
        alignItems: 'center',
    },
    interestText: {
        color: '#CE82FF', // Purple text color
        fontWeight: 'bold',
        fontSize: 12, // Added font size for smaller text
    },
    xpSection: {
        margin: 20,
    },
    chart: {
        alignItems: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    followButton: {
        backgroundColor: '#CE82FF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    followButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
