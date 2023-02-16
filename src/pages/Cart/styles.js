import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ActionButtons = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "4px",
  padding: "4px 6px",
  width: "96px",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid rgba(145, 158, 171, 0.32)",
}));

export const StyledCartItems = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.mode === "light" ? "#000" : "#fff"}`,
  borderBottom: `1px solid ${theme.palette.mode === "light" ? "#000" : "#fff"}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
}));
