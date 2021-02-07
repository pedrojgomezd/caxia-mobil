import { useFormik } from "formik";
import React, { useState } from "react";
import { TextInput } from "../../authentication/components/Form";
import { Box, Button, Text } from "../../components";
import AvartarUpload from "./AvatarUpload";
import * as Yup from "yup";
import clientHttp from "../../services/clientHttp";

const CreateSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  code: Yup.string().required("Required"),
  birthday: Yup.string().required("Required"),
});

interface FormCustomerProps {
  urlForm: String;
  method: String;
}
const FormCustomer = ({ urlForm, method }: FormCustomerProps) => {
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setValues,
  } = useFormik({
    validationSchema: CreateSchema,
    initialValues: { name: "", code: "", birthday: "" },
    onSubmit: (value) => {
      setLoading(true);
      setError(false);
      let localUri = resultImage.uri;
      let filename = localUri.split("/").pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      const form = new FormData();
      for (let v in value) {
        form.append(v, value[v]);
      }
      form.append("avatar", { uri: localUri, name: filename, type });

      clientHttp[method](urlForm, form)
        .then(({ data }) => {
          setLoading(false);
        })
        .catch(({ error }) => {
          setError(true);
        });
    },
  });
  return (
    <Box padding="m">
      <AvartarUpload {...{ setResultImage }} />
      <Box>
        <Box marginBottom="m">
          <TextInput
            icon="user"
            placeholder="Name"
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            error={errors.name}
            touched={touched.name}
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => true}
          />
        </Box>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="code"
              placeholder="Code customer"
              onChangeText={handleChange("code")}
              onBlur={handleBlur("code")}
              error={errors.code}
              touched={touched.code}
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => true}
            />
          </Box>
          <Box>
            <Box marginBottom="m">
              <TextInput
                icon="calendar"
                placeholder="Birthday"
                onChangeText={handleChange("birthday")}
                onBlur={handleBlur("birthday")}
                error={errors.birthday}
                touched={touched.birthday}
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
                dataDetectorTypes="calendarEvent"
                onSubmitEditing={() => true}
              />
            </Box>
            <Box alignItems="center" marginTop="l">
              <Button
                variant="primary"
                label="Save"
                onPress={resultImage?.uri ? handleSubmit : () => false}
                loading={loading}
              />
            </Box>
            {error && (
              <Box
                backgroundColor="danger"
                borderRadius="m"
                padding="m"
                marginTop="m"
              >
                <Text color="white">An error occurred.</Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormCustomer;
