import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StudySessionScreen from './src/screens/StudySessionScreen';
import CustomBottomSheet from './src/components/CustomBottomSheet';
import ChatScreen from './src/screens/ChatScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import AuthenticationScreen from './src/screens/AuthenticateScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import { View } from 'react-native';
import { UserProvider } from './src/context/UserContext';
import { AuthProvider } from './src/context/AuthContext';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const AuthStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="StudySession" component={StudySessionScreen} />
      <HomeStack.Screen name="Messages" component={MessagesStackScreen} />
    </HomeStack.Navigator>
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

function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Authentication" component={AuthenticationScreen} />
      <AuthStack.Screen name="Loading" component={LoadingScreen} />
    </AuthStack.Navigator>
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
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
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
      <Tab.Screen
        name="Middle"
        component={HomeStackScreen}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('CustomBottomSheet');
          },
        })}
        options={{
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <UserProvider>
          <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
              <RootStack.Screen name="Auth" component={AuthStackScreen} />
              <RootStack.Screen name="Main" component={MyTabs} />
              <RootStack.Screen name="CustomBottomSheet" component={CustomBottomSheet} options={{ presentation: 'modal' }} />
            </RootStack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

export default App;
