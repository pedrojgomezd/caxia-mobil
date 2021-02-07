import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export const theme = createTheme({
  colors: {
    primary: "#3b82f6",
    primaryLight: "#93c5fd",
    secondary: "#3b82f6",
    text: "rgba(12,13,52, 0.7)",
    white: "white",
    gray: "rgba(12,13,52, 0.05)",
    lightGray: "#F4F0EF",
    darkGray: "#333333",
    danger: "#ff0058",
    orange: "#fe5e33",
    yellow: "#ffc641",
    pink: "#ff87a2",
    violet: "#442cb9",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      fontWeight: "600",
      color: "white",
      textAlign: "center",
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      lineHeight: 30,
      fontWeight: "400",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontWeight: "400",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "text",
    },
    button: {
      fontSize: 15,
      color: "text",
      fontWeight: "500",
      textAlign: "center",
    },
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
//export default theme;
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
