import React, { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import StudySessionScreen from './src/screens/StudySessionScreen';
import MiddleScreen from './src/screens/MiddleScreen';
import ChatScreen from './src/screens/ChatScreen';
import CustomBottomSheet from './src/components/CustomBottomSheet';
import { View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const MiddleStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="StudySession" component={StudySessionScreen} />
    </HomeStack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="SearchMain" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator screenOptions={{ headerShown: false }}>
      <MessagesStack.Screen name="MessagesMain" component={MessagesScreen} />
      <MessagesStack.Screen name="Chat" component={ChatScreen} />
    </MessagesStack.Navigator>
  );
}

function MiddleStackScreen() {
  return (
    <MiddleStack.Navigator screenOptions={{ headerShown: false }}>
      <MiddleStack.Screen name="MiddleMain" component={MiddleScreen} />
    </MiddleStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = '';
          let iconStyle = {};

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search1' : 'search1';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'message1' : 'message1';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Middle') {
            iconName = 'plus';
            iconStyle = {
              backgroundColor: '#CE82FF',
              borderRadius: 10,
              paddingHorizontal: 20,
              paddingVertical: 5,
              elevation: 5,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            };
            return (
              <View style={iconStyle}>
                <AntDesign name={iconName} size={size} color="white" />
              </View>
            );
          }

          return <AntDesign name={iconName} size={size} color={focused ? 'rgba(206, 130, 255, 0.6)' : color} />;
        },
        tabBarActiveTintColor: '#CE82FF',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: route.name !== 'Middle',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen
        name="Middle"
        component={MiddleStackScreen}
        options={{
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen name="Messages" component={MessagesStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
