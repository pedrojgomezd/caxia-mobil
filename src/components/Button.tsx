import * as React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useTheme, Text, Box } from "./Theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface ButtonProps {
  variant: "default" | "primary" | "transparent";
  label?: string;
  onPress: () => void;
  children?: React.ReactNode;
  loading?: boolean;
}

const Button = ({
  variant,
  label,
  children,
  onPress,
  loading,
}: ButtonProps) => {
  const theme = useTheme();
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "transparent"
      ? "transparent"
      : theme.colors.gray;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        {loading && <ActivityIndicator color="white" />}
        {children ? (
          children
        ) : (
          <Text variant="button" style={{ color }}>
            {label}
          </Text>
        )}
      </Box>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: "default",
};

export default Button;
