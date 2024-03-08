import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login & Signup/Login";
import Signup from "../screens/Login & Signup/Signup";
import Parent from "./Parent";
import Forgatepassword from "../screens/Login & Signup/Forgatepassword";
import AddExpense from "../screens/AddExpense";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
                    <Stack.Screen name="Parent" component={Parent}/>
                    <Stack.Screen name="Adde" component={AddExpense}/>
                    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Signup" component={Signup}/>
                    <Stack.Screen name="Forgate" component={Forgatepassword}/>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
}