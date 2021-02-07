import React, { forwardRef } from "react";
import { Feather } from "@expo/vector-icons";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  Pressable,
} from "react-native";

import { Box, useTheme } from "../../../components/Theme";
import { RoundedIcon } from "../../../components";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  error?: string;
  touched?: boolean;
  isDatePiacker?: boolean;
  onPressDatePicker?: () => void;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  (
    { icon, error, touched, isDatePiacker, onPressDatePicker, ...props },
    ref
  ) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;

    const reColor = !touched ? "text" : error ? "danger" : "primary";
    const color = theme.colors[reColor];
    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={reColor}
        padding="m"
      >
        <Pressable onPress={onPressDatePicker}>
          <Feather name={icon} size={16} {...{ color }} />
        </Pressable>
        <Box flex={1} marginLeft="s">
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...{
              ref,
            }}
            {...props}
          />
        </Box>
        {touched && (
          <RoundedIcon
            name={!error ? "check" : "x"}
            backgroundColor={!error ? "primary" : "danger"}
            size={SIZE}
            color="white"
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
