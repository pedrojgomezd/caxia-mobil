import React from "react";
import { AuthProvider } from "./AuthProviders";
import Routes from "./Routes";

export const Providers = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
