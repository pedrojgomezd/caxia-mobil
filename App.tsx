import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LoadAssets } from "./src/components";
import { assets as authenticationsAssets } from "./src/authentication";

import { theme } from "./src/components/Theme";

import Routes from "./src/Routes/Routes";
import { Providers } from "./src/Routes/Provider";

const assets = [...authenticationsAssets];

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ assets }}>
        <SafeAreaProvider>
          <Providers />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
