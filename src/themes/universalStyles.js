import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SpaceBtwFlexItems = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const CenteredFlexItems = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CenteredFlexDirection = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});
