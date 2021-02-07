import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box, Button, Text } from "../components";

interface CustomerDetailsProps {
  route: any;
}

const CustomerDetails = ({ route, navigation }: CustomerDetailsProps) => {
  const { item } = route.params;
  return (
    <Box flex={1}>
      <Box flex={0.5} backgroundColor="lightGray" overflow="hidden">
        <Image
          source={{ uri: item.avatar }}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          }}
        />
      </Box>
      <Box>
        <Box padding="m" flexDirection="row">
          <Text variant="body">Name:</Text>
          <Text variant="body">{item.name}</Text>
        </Box>
        <Box padding="m" flexDirection="row">
          <Text variant="body">Code:</Text>
          <Text variant="body">{item.code}</Text>
        </Box>
        <Box padding="m" flexDirection="row">
          <Text variant="body">Birthday:</Text>
          <Text variant="body">{item.birthday}</Text>
        </Box>
      </Box>
      <Box alignItems="center">
        <Button label="Back" onPress={() => navigation.goBack()} />
      </Box>
    </Box>
  );
};

export default CustomerDetails;
