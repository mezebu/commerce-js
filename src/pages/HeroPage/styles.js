import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SwipeablelDot = styled(Button)({
  color: "#fff",
  backgroundColor: "#000",
  opacity: 1,
  borderRadius: 20,
  p: 1,
  minWidth: "auto",
});

export const SwipeablelImage = styled(Box)({
  height: 300,
  display: "block",
  overflow: "hidden",
  width: "100%",
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
});

export const fixedBottom = {
  position: "absolute",
  bottom: 260,
  width: "100%",
};
