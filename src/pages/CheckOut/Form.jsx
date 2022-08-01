import React from "react";
import { Container } from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const Form = ({ activeStep, nextStep, shippingData, backStep }) => {
  return (
    <Container>
      {activeStep === 0 ? (
        <AddressForm nextStep={nextStep} />
      ) : (
        <PaymentForm
          shippingData={shippingData}
          backStep={backStep}
          nextStep={nextStep}
        />
      )}
    </Container>
  );
};

export default Form;
