import React from "react";
import { Container } from "../components";
import FormCustomer from "./components/FormCustomer";

const CustomerCreate = () => {
  return (
    <Container title="Create">
      <FormCustomer urlForm="/customers/register" method="post" />
    </Container>
  );
};

export default CustomerCreate;
