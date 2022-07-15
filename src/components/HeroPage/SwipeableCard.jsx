import React, { useState } from "react";
import {
  MobileStepper,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box, Button, Fab } from "@mui/material";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { red } from "@mui/material/colors";

import { fixedBottom, SwipeablelImage } from "./styles";
import { locationImages } from "./data";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SwipeableCard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [data] = useState(locationImages);
  const maxSteps = data.length;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        mb: 2,
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
          transition: "all 250ms ease-in-out",
        },
        borderRadius: 5,
      }}
    >
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.id}>
            <SwipeablelImage component="img" src={step.url} alt={step.id} />
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: "transparent" }}
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Fab
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <ArrowRightRoundedIcon sx={{ fontSize: 30 }} />
            </Fab>
          }
          backButton={
            <Fab size="small" onClick={handleBack} disabled={activeStep === 0}>
              <ArrowLeftRoundedIcon />
            </Fab>
          }
        />
      </Box>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          height: matches ? 250 : 260,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Typography
          sx={{ fontWeight: 500, color: red[500] }}
          variant="caption"
          gutterBottom
        >
          {data[activeStep].label}
        </Typography>
        <Typography sx={{ fontWeight: 700 }} variant="h6" gutterBottom>
          {data[activeStep].headerText}
        </Typography>
        <Typography
          sx={{ fontWeight: 500, color: "text.secondary" }}
          variant="body2"
          gutterBottom
        >
          {data[activeStep].desc}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" disableElevation>
            {data[activeStep].link}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SwipeableCard;
