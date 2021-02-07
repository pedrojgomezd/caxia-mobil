import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthenticationRoutes } from "../components/Navigation";
import Login from "./Login";

export const assets = [];

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
