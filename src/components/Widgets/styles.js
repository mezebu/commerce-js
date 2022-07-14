import { Box, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SwipeablelDot = styled(Button)({
  color: "#fff",
  backgroundColor: "#000",
  opacity: 1,
  borderRadius: 20,
  p: 1,
  minWidth: "auto",
});

export const PaperBottom = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  p: 2,
  height: 250,
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
  bottom: 250,
  width: "100%",
};
