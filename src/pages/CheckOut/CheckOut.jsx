import React, { useEffect, useState } from "react";
import { Box, Container, Paper, Step } from "@mui/material";
import { StepLabel, Stepper, Typography } from "@mui/material";

import commerce from "../../lib/commerce";
import { useCommerce } from "../../contexts/CommerceContext";

import Confirmation from "./Confirmation";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const steps = ["Shipping", "Payment"];

const CheckOut = () => {
  const [shippingData, setShippingData] = useState({});
  const [checkoutToken, setCheckoutToken] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const { cart } = useCommerce();

  useEffect(() => {
    if (cart.line_items) {
      generateCheckoutToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateCheckoutToken = () => {
    commerce.checkout
      .generateToken(cart.id, { type: "cart" })
      .then((token) => {
        setCheckoutToken(token);
      })
      .catch((error) => {
        console.log("There was an error in generating a token", error);
      });
  };

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const backStep = () => setActiveStep((prevStep) => prevStep - 1);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm {...{ checkoutToken, next }} />
    ) : (
      <PaymentForm {...{ shippingData, checkoutToken, backStep, nextStep }} />
    );

  return (
    <Container maxWidth="md">
      <Paper variant="outlined" sx={{ p: 4, mb: 5 }}>
        <Box>
          <Typography align="center" variant="h5" fontWeight={700} gutterBottom>
            Checkout
          </Typography>
        </Box>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <Confirmation />
        ) : (
          checkoutToken.id && <Form />
        )}
      </Paper>
    </Container>
  );
};

export default CheckOut;
