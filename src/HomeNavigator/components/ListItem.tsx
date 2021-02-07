import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { dataitems } from "../../../types";
import { Box, Text } from "../../components";

interface ListItemProp {
  item: dataitems;
  navigation: any;
}

const ListItem = ({ item, navigation }: ListItemProp) => {
  return (
    <Pressable onPress={() => navigation.navigate("CustomerDetails", { item })}>
      <Box
        flexDirection="row"
        padding="s"
        borderBottomColor="gray"
        borderBottomWidth={1}
      >
        <Box
          width={50}
          height={50}
          borderRadius="xl"
          backgroundColor="darkGray"
          marginRight="m"
          overflow="hidden"
        >
          <Image
            source={{ uri: item.avatar }}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
            }}
          />
        </Box>
        <Box flex={1} justifyContent="center">
          <Text variant="title2" color="darkGray">
            {item.name}
          </Text>
          <Text variant="body">{item.code}</Text>
        </Box>
        <Box justifyContent="center">
          <Feather name="chevron-right" size={24} color="#ddd" />
        </Box>
      </Box>
    </Pressable>
  );
};

export default ListItem;
