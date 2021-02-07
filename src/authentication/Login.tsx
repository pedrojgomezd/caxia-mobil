import React, { useContext, useRef, useState } from "react";
import { useFormik } from "formik";
import { ActivityIndicator, TextInput as RNTextINput } from "react-native";
import * as Yup from "yup";

import { Container, Button, Text, Box } from "../components";
import { StackNativationProps } from "../components/Navigation";
import TextInput from "./components/Form/TextInput";
import Checkbox from "./components/Form/Checkbox";
import { AuthContext } from "../Routes/AuthProviders";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface LoginProps {}

const LoginScreen = ({ navigation }: StackNativationProps<"Login">) => {
  const password = useRef<RNTextINput>(null);
  const { login, error, loadingAuth } = useContext(AuthContext);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: ({ email, password }) => {
      login(email, password);
      //navigation.navigate("Home")
    },
  });

  return (
    <Container>
      <Box padding="l">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome.
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Into your credentials below and login to your acount
        </Text>

        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter you Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Eter your password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            secureTextEntry={true}
            returnKeyType="go"
            returnKeyLabel="Login"
            autoCompleteType="password"
            onSubmitEditing={() => handleSubmit()}
          />
          <Box flexDirection="row" justifyContent="space-between" marginTop="m">
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
          </Box>
          <Box alignItems="center" marginTop="l">
            <Button
              variant="primary"
              label="Login"
              onPress={handleSubmit}
              loading={loadingAuth}
            />
          </Box>
        </Box>
        {error && (
          <Box
            backgroundColor="danger"
            borderRadius="m"
            padding="m"
            marginTop="m"
          >
            <Text color="white">{error}</Text>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default LoginScreen;
