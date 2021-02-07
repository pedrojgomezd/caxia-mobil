import { Feather } from "@expo/vector-icons";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { FlatList, Pressable, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Container, Text } from "../components";
import { AuthContext } from "../Routes/AuthProviders";
import clientHttp from "../services/clientHttp";
import { ListItem } from "./components";

const Customers = ({ navigation }) => {
  const { logout, user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchCustomer = useCallback(() => {
    setRefreshing(true);
    clientHttp.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.token}`;

    clientHttp
      .get("customers")
      .then(({ data }) => {
        setRefreshing(false);
        setData(data);
      })
      .catch((error) => {
        setRefreshing(false);
      });
  }, [refreshing, data]);

  useEffect(() => {
    fetchCustomer();
  }, []);

  return (
    <Container title="Customers">
      <Box flex={1} backgroundColor="white">
        {!data.length ? (
          <Box justifyContent="center" flex={1} alignItems="center">
            <Feather name="inbox" size={34} />
            <Text>No records to show</Text>
            <Pressable onPress={fetchCustomer}>
              <Feather name="refresh-cw" size={18} />
            </Pressable>
          </Box>
        ) : (
          <SafeAreaView>
            <FlatList
              refreshControl={
                <RefreshControl
                  onRefresh={fetchCustomer}
                  refreshing={refreshing}
                />
              }
              renderItem={(props) => (
                <ListItem {...props} navigation={navigation} />
              )}
              keyExtractor={(item) => item.coe}
              {...{ data }}
            />
          </SafeAreaView>
        )}
      </Box>
    </Container>
  );
};

export default Customers;
