import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

import PurchaseSummary from "./PurchaseSummary";
import { useCommerce } from "../../contexts/CommerceContext";
import { SpaceBtwFlexItems } from "../../themes/universalStyles";

const initialValues = {
  cardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  ccv: "",
  billingPostalZipcode: "",
  showPassword: false,
};

const PaymentForm = ({ shippingData, checkoutToken, backStep, nextStep }) => {
  const { handleCaptureCheckout } = useCommerce();
  const [values, setValues] = useState(initialValues);

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleSubmit = () => {
    const orderData = {
      line_items: checkoutToken.line_items,
      customer: {
        firstname: shippingData.firstname,
        lastname: shippingData.lastname,
        email: shippingData.email,
      },
      shipping: {
        name: "Primary",
        street: shippingData.address,
        town_city: shippingData.city,
        county_state: shippingData.shippingSubdivision,
        postal_zip_code: shippingData.postalcode,
        country: shippingData.shippingCountry,
      },
      fulfillment: {
        shipping_method: shippingData.shippingOption,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: values.cardNumber,
          expiry_month: values.expiryMonth,
          expiry_year: values.expiryYear,
          cvc: values.ccv,
          postal_zip_code: values.billingPostalZipcode,
        },
      },
    };
    handleCaptureCheckout(checkoutToken.id, orderData);
    nextStep();
  };

  return (
    <Box>
      <PurchaseSummary {...{ checkoutToken }} />
      <Typography sx={{ mt: 2 }} variant="h6" align="center" gutterBottom>
        Payment Methods
      </Typography>
      <form onSubmit={handleSubmit}>
        <input
          value={values.cardNumber}
          onChange={handleChange("cardNumber")}
        />
        <input
          value={values.expiryMonth}
          onChange={handleChange("expiryMonth")}
        />
        <input
          value={values.expiryYear}
          onChange={handleChange("expiryYear")}
        />
        <input value={values.ccv} onChange={handleChange("ccv")} />
        <input
          value={values.billingPostalZipcode}
          onChange={handleChange("billingPostalZipcode")}
        />
        <SpaceBtwFlexItems sx={{ mt: 4 }}>
          <Button variant="contained" onClick={backStep} disableElevation>
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="success"
            disableElevation
          >
            Pay {checkoutToken.live.subtotal.formatted_with_symbol}
          </Button>
        </SpaceBtwFlexItems>
      </form>
    </Box>
  );
};

export default PaymentForm;

PaymentForm.propType = {
  shippingData: PropTypes.object,
  checkoutToken: PropTypes.object,
  nextStep: PropTypes.func,
  backStep: PropTypes.func,
};
