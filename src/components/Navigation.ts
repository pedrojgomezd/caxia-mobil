import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface StackNativationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export type AppRoutes = {
  Authenditacion: undefined;
  Home: undefined;
  CustomerDetails: undefined;
};

export type AuthenticationRoutes = {
  Login: undefined;
};

export type HomeRoutes = {
  Home: undefined;
}