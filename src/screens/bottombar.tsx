import react from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import AlarmScreen from './AlarmScreen';
import JoinList from './JoinList';
import AllList from './AllList';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Root = ({ navigation } : any) => {
    return (
        <Tab.Navigator
          screenOptions={{tabBarShowLabel: false, 
                          headerTitle: () => false,
                          headerTransparent: true,
                          }}>
            <Tab.Screen
                name = "홈"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="home" size={30} style={{color: focused ? "#FF8642" : "#F0DFC1"}} />
                    ),
                }}
            />
            <Tab.Screen
                name="전체목록"
                component={AllList}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="magnifying-glass" style={{ color: focused ? "#FF8642" : "#F0DFC1" }}
                            size={30}
                        />
                    ),
                }}

            />
            <Tab.Screen
                name="참여목록"
                component={JoinList}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="bowl"
                            style={{ color: focused ? "#FF8642" : "#F0DFC1" }}
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="알림"
                component={AlarmScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="bell"
                            style={{ color: focused ? "#FF8642" : "#F0DFC1" }}
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="내 프로필"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="person-sharp" 
                            style={{ color: focused ? "#FF8642" : "#F0DFC1" }}
                            size={30}
                        />
                        ),
                    }}
                />
        </Tab.Navigator>
    );
}

export default function index() {
    return (
        <NavigationContainer>
            <Root />
        </NavigationContainer>
    );
};