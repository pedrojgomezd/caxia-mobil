import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Customers from "./Customers";
import CustomerCreate from "./CustomerCreate";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const HomeNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Customers"
      component={Customers}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="users" size={24} {...{ color }} />
        ),
      }}
    />
    <Tab.Screen
      name="Create"
      component={CustomerCreate}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="user-plus" size={24} {...{ color }} />
        ),
      }}
    />
  </Tab.Navigator>
);
