import React, { useState } from "react";
import { Box, Button, Typography, Grid, InputAdornment } from "@mui/material";
import { TextField, FormControl, InputLabel } from "@mui/material";
import { OutlinedInput, IconButton } from "@mui/material";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import Visibility from "@mui/icons-material/Visibility";
import PropTypes from "prop-types";

import PurchaseSummary from "./PurchaseSummary";
import { useCommerce } from "../../contexts/CommerceContext";
import NumberFormat from "react-number-format";

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

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
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
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3} sx={{ px: 5, py: 3 }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <NumberFormat
              customInput={TextField}
              fullWidth
              label="Card Number"
              name="cardNumber"
              variant="outlined"
              format="#### #### #### ####"
              placeholder="Use 4242 4242 4242 4242"
              value={values.cardNumber}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs md={3} sm={4}>
            <NumberFormat
              customInput={TextField}
              fullWidth
              label="Expiry Month"
              name="expiryMonth"
              variant="outlined"
              format="##"
              value={values.expiryMonth}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs md={3} sm={4}>
            <NumberFormat
              customInput={TextField}
              fullWidth
              label="Expiry Year"
              name="expiryYear"
              variant="outlined"
              format="##"
              value={values.expiryYear}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} sm={4}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="outlined-adornment-password">CVC</InputLabel>
              <NumberFormat
                customInput={OutlinedInput}
                type={values.showPassword ? "text" : "password"}
                label="CVC"
                name="ccv"
                variant="outlined"
                format="###"
                value={values.ccv}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <NumberFormat
              customInput={TextField}
              fullWidth
              label="Zip/Postal Code"
              name="billingPostalZipcode"
              variant="outlined"
              format="######"
              value={values.billingPostalZipcode}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ px: 5, py: 3 }}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Button
              fullWidth
              variant="contained"
              onClick={backStep}
              disableElevation
            >
              Back
            </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="success"
              disableElevation
            >
              Pay {checkoutToken.live.subtotal.formatted_with_symbol}
            </Button>
          </Grid>
        </Grid>
      </Box>
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
