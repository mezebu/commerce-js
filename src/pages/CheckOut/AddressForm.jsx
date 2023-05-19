import React, { useEffect, useState } from "react";
import { InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { Box, Button, FormControl, Grid } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import CustomeTextField from "./CustomeTextField";
import commerce from "../../lib/commerce";

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingSubdivisions, setShippingSubdivisions] = useState({});
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();
  const onSubmit = (data) =>
    next({ ...data, shippingCountry, shippingSubdivision, shippingOption });

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );
  const options = shippingOptions.map((option) => ({
    id: option.id,
    label: `${option.description} - $${option.price.formatted_with_code}`,
  }));

  const fetchShippingCountries = async (tokenId) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        tokenId
      );
      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
    } catch (error) {
      console.log(error.data.error.message);
    }
  };

  const fetchSubdivisions = async (countryCode) => {
    try {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
        countryCode
      );
      setShippingSubdivisions(subdivisions);
      setShippingSubdivision(Object.keys(subdivisions)[0]);
    } catch (error) {
      console.log("There was an error fetching the shipping methods", error);
    }
  };

  // prettier-ignore
  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    try {
      const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, stateProvince })
      setShippingOption(options[0].id)
      setShippingOptions(options)
    } catch (error) {
      console.log("There was an error fetching the shipping methods", error);
    }
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision, checkoutToken.id, shippingCountry]);

  return (
    <Box>
      <Typography variant="h6" align="center" sx={{ mt: 1 }} gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <Box
          component="form"
          sx={{ mt: 2 }}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <CustomeTextField name="firstname" label="First Name" />
            <CustomeTextField name="lastname" label="Last Name" />
            <CustomeTextField name="address" label="Address" />
            <CustomeTextField name="email" label="Email" type="email" />
            <CustomeTextField name="city" label="City" />
            <CustomeTextField name="postalcode" label="Postal Code" />
            <Grid item xs={12} sm={6}>
              <FormControl variant="filled" fullWidth>
                <InputLabel>Shipping Country</InputLabel>
                <Select
                  value={shippingCountry}
                  onChange={(e) => setShippingCountry(e.target.value)}
                >
                  {countries.map(({ id, label }) => (
                    <MenuItem key={id} value={id}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="filled" fullWidth>
                <InputLabel>Shipping Subdivision</InputLabel>
                <Select
                  value={shippingSubdivision}
                  onChange={(e) => setShippingSubdivision(e.target.value)}
                >
                  {subdivisions.map(({ id, label }) => (
                    <MenuItem key={id} value={id}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="filled" fullWidth>
                <InputLabel>Shipping Options</InputLabel>
                <Select
                  value={shippingOption}
                  onChange={(e) => setShippingOption(e.target.value)}
                >
                  {options.map(({ id, label }) => (
                    <MenuItem key={id} value={id}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="info"
                size="large"
                component={Link}
                to="/"
                fullWidth
                disableElevation
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="success"
                type="submit"
                size="large"
                fullWidth
                disableElevation
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default AddressForm;

AddressForm.propType = {
  checkoutToken: PropTypes.object,
  next: PropTypes.func,
};
