import React, { ReactNode } from "react";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

import { Box, useTheme } from "../../components/Theme";

interface IconSocialProps {
  children: ReactNode;
}
const IconSocial = ({ children }: IconSocialProps) => {
  const theme = useTheme();
  const SIZE = theme.spacing.l * 2;

  return (
    <Box
      marginHorizontal="m"
      backgroundColor="white"
      width={SIZE}
      height={SIZE}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  const theme = useTheme();
  const SIZE = theme.spacing.l * 2;
  return (
    <Box flexDirection="row" justifyContent="center">
      <IconSocial>
        <AntDesign name="google" size={SIZE / 2} />
      </IconSocial>
      <IconSocial>
        <EvilIcons name="sc-facebook" size={SIZE * 0.9} />
      </IconSocial>
      <IconSocial>
        <AntDesign name="twitter" size={SIZE / 2} />
      </IconSocial>
    </Box>
  );
};

export default SocialLogin;
