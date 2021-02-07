import React, { useState } from "react";
import * as SecureStore from "expo-secure-store";
import clientHttp from "../../services/clientHttp";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        loadingAuth,
        login: (email, password) => {
          setLoadingAuth(true);
          clientHttp
            .post("/token", {
              email,
              password,
              device_name: "mobile",
            })
            .then((response) => {
              const userResponse = {
                email: response.data.user.email,
                token: response.data.token,
              };
              setUser(userResponse);
              setError(null);
              SecureStore.setItemAsync("user", JSON.stringify(userResponse));
              setLoadingAuth(false);
            })
            .catch((error) => {
              const key = Object.keys(error.response.data.errors)[0];
              setError(error.response.data.errors[key][0]);
              setLoadingAuth(false);
            });
        },
        logout: () => {
          clientHttp.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${user.token}`;

          clientHttp
            .post("/logout")
            .then((response) => {
              setUser(null);
              SecureStore.deleteItemAsync("user");
            })
            .catch((error) => {
              console.log(error.response);
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
