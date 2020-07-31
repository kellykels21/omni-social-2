import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "@navigation/screens/login";
import HomeScreen from "@navigation/screens/home";

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();

function Login() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </LoginStack.Navigator>
  );
}

function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {/* <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, gestureEnabled: false }}
        /> */}
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
