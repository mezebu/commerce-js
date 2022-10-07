import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ActionButtons = styled(Box)(({ theme }) => ({
  border: "1px solid rgba(145, 158, 171, 0.32)",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 100,
  height: 25,
}));

export const StyledCartItems = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.mode === "light" ? "#000" : "#fff"}`,
  borderBottom: `1px solid ${theme.palette.mode === "light" ? "#000" : "#fff"}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
}));
