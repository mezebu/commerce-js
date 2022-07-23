import { Box, Button, Card } from "@mui/material";
import { amber, green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const ProductWrapper = styled(Card)(() => ({
  background: "rgba( 255, 255, 255, 0.2 )",
  backdropFilter: "blur (4px)",
  WebkitBackdropFilter: "blur(4px)",
}));

export const Divide = styled("div")(({ theme }) => ({
  width: "100%",
  padding: 4,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export const ActionButtons = styled(Box)(({ theme }) => ({
  border: "1px solid rgba(145, 158, 171, 0.32)",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 90,
  height: 35,
}));

export const CartButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(amber[500]),
  backgroundColor: amber[500],
  "&:hover": {
    backgroundColor: amber[700],
  },
}));

export const BuyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  "&:hover": {
    backgroundColor: green[700],
  },
}));
