import React from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PropTypes from "prop-types";

import PurchaseSummary from "./PurchaseSummary";
import { useCommerce } from "../../contexts/CommerceContext";
import { SpaceBtwFlexItems } from "../../themes/universalStyles";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ shippingData, checkoutToken, backStep, nextStep }) => {
  const { handleCaptureCheckout } = useCommerce();

  const handleSubmit = async (event, elements, stripe) => {
    event.prventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log(error.message);
    } else {
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
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      handleCaptureCheckout(checkoutToken.id, orderData);
      nextStep();
    }
  };

  return (
    <Box>
      <Box>
        <PurchaseSummary {...{ checkoutToken }} />
        <Typography sx={{ mt: 2 }} variant="h6" align="center" gutterBottom>
          Payment Methods
        </Typography>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ stripe, elements }) => (
              <Box
                component="form"
                onSubmit={(e) => handleSubmit(e, elements, stripe)}
              >
                <CardElement />
                <SpaceBtwFlexItems sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    onClick={backStep}
                    disableElevation
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    disabled={!stripe}
                    disableElevation
                  >
                    Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                  </Button>
                </SpaceBtwFlexItems>
              </Box>
            )}
          </ElementsConsumer>
        </Elements>
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
