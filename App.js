import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "@navigation/screens/login";
import HomeScreen from "@navigation/screens/home";
import SearchScreen from "@navigation/screens/search";
import UserDetails from "@navigation/screens/search/user-details";
import FormScreen from "@navigation/screens/login/form";
import VenueDetailsScreen from "@navigation/screens/home/venue-details";

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Login() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <LoginStack.Screen
        name="Form"
        component={FormScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </LoginStack.Navigator>
  );
}

function Search() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <SearchStack.Screen name="UserDetails" component={UserDetails} />
    </SearchStack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "rgba(22, 22, 22, 1.0)",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <RootStack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <RootStack.Screen name="VenueDetails" component={VenueDetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
