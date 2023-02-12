import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackProps } from "./types";
import  SignIn  from "./../screens/SIgnIn/SignIn";
import  Signup  from "../screens/Signup/Signup";

const Stack = createStackNavigator<RootStackProps>();

const AppNavigation = () => {
  const renderAuthStack = () => {
    return (
      <>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={Signup} />
      </>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#2C6BED" },
        headerTitleStyle: { color: "white" },
        headerTintColor: "white",
      }}
    >
      {renderAuthStack()}
    </Stack.Navigator>
  );
};

export default AppNavigation;
