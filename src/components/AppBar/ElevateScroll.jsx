import { cloneElement } from "react";
import { useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types";

const ElevateScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 3,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevateScroll;

ElevateScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
