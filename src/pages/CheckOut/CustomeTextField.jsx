import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import PropTypes from "prop-types";

const CustomeTextField = ({ name, label, type }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => (
          <TextField
            variant="filled"
            label={label}
            {...field}
            fullWidth
            required
            type={type}
          />
        )}
        name={name}
        control={control}
        defaultValue={""}
      />
    </Grid>
  );
};

export default CustomeTextField;

CustomeTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};
