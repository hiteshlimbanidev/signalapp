import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackProps } from "./types";
import { SignIn } from "../screens/SIgnIn";
import { Signup } from "../screens/Signup";
import { baseColor } from "../theme";

const Stack = createStackNavigator<RootStackProps>();

const globalScreenOptions = {
  headerStyle: { backgrondColor: "#2C6BED" },
  headerTitleStyle: { Color: "white" },
  headerTintColor: "white",
};

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
        headerStyle: {  backgroundColor: "#2C6BED" },
        headerTitleStyle: { color: "white" },
        headerTintColor: "white",
      }}
    >
      {renderAuthStack()}
    </Stack.Navigator>
  );
};

export default AppNavigation;
