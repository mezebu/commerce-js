import React from "react";
import { Container } from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const Form = ({ activeStep, nextStep, shippingData }) => {
  return (
    <Container>
      {activeStep === 0 ? (
        <AddressForm nextStep={nextStep} />
      ) : (
        <PaymentForm shippingData={shippingData} />
      )}
    </Container>
  );
};

export default Form;
