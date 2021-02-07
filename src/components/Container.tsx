import { Feather } from "@expo/vector-icons";
import React, { ReactNode, useContext } from "react";
import { Dimensions, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "../Routes/AuthProviders";

import { Box, Text, useTheme } from "./Theme";

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  title?: String;
}

const Container = ({ children, title }: ContainerProps) => {
  const { logout, user } = useContext(AuthContext);
  const insert = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    >
      <Box height={wHeight} backgroundColor="white">
        {user ? (
          <Box backgroundColor="white">
            <Box
              marginTop="xl"
              paddingHorizontal="m"
              alignContent="space-between"
              justifyContent="space-between"
              flexDirection="row"
            >
              <Box>
                <Text
                  variant="title1"
                  fontSize={28}
                  fontWeight="bold"
                  color="darkGray"
                >
                  {title}
                </Text>
              </Box>
              <Box>
                <Pressable onPress={logout}>
                  <Box>
                    <Feather size={24} name="log-out" />
                  </Box>
                </Pressable>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            backgroundColor="primary"
            padding="m"
            height={height}
            borderBottomEndRadius="l"
            borderBottomLeftRadius="l"
            justifyContent="center"
            alignItems="center"
          >
            <Text variant="title1" color="white">
              Customers Control.
            </Text>
          </Box>
        )}
        <Box flex={1} overflow="hidden" backgroundColor="white">
          <Box backgroundColor="white" flex={1}>
            {children}
          </Box>
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
