import react from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/MainScreen/HomeScreen";
import { ProfileScreen } from "../screens/MainScreen/ProfileScreen";
import AlarmScreen from "../screens/MainScreen/AlarmScreen";
import JoinList from "../screens/MainScreen/JoinList";
import AllList from "../screens/MainScreen/AllList";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const Root = ({ navigation }: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitle: () => false,
        headerTransparent: true,
      }}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{
          tabBarStyle: { borderTopWidth: 2, borderTopColor: "#FF8642" },
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={30}
              style={{ color: focused ? "#FF8642" : "#F0DFC1" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="전체목록"
        component={AllList}
        options={{
          tabBarStyle: { borderTopWidth: 2, borderTopColor: "#FF8642" },
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="magnifying-glass"
              style={{ color: focused ? "#FF8642" : "#F0DFC1" }}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="참여목록"
        component={JoinList}
        options={{
          tabBarStyle: { borderTopWidth: 2, borderTopColor: "#FF8642" },
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/soup_icon_orange.png")
                  : require("../../assets/soup_icon_beige.png")
              }
              style={{ width: size, height: size, borderRadius: size }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="알림"
        component={AlarmScreen}
        options={{
          tabBarStyle: { borderTopWidth: 2, borderTopColor: "#FF8642" },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="bell"
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
          tabBarStyle: { borderTopWidth: 2, borderTopColor: "#FF8642" },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-sharp"
              style={{ color: focused ? "#FF8642" : "#F0DFC1" }}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
