import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeNavigator } from "../HomeNavigator";
import { AuthenticationNavigator } from "../authentication";
import { AppRoutes } from "../components/Navigation";
import * as SecureStore from "expo-secure-store";
import { AuthContext } from "./AuthProviders";
import { Box } from "../components";
import { ActivityIndicator } from "react-native";
import CustomerDetails from "../HomeNavigator/CustomerDetails";

const AppStack = createStackNavigator<AppRoutes>();

const Routes = () => {
  const { user, setUser, login, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    SecureStore.getItemAsync("user")
      .then((userString) => {
        if (userString) {
          // decode it
          // login();
          userObject = JSON.parse(userString);
          setUser(userObject);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Box flex={1} justifyContent="center" backgroundColor="secondary">
        <ActivityIndicator size="large" />
      </Box>
    );
  }
  return (
    <AppStack.Navigator headerMode="none">
      {user ? (
        <>
          <AppStack.Screen name="Home" component={HomeNavigator} />
          <AppStack.Screen name="CustomerDetails" component={CustomerDetails} />
        </>
      ) : (
        <AppStack.Screen
          name="Authenditacion"
          component={AuthenticationNavigator}
        />
      )}
    </AppStack.Navigator>
  );
};

export default Routes;
