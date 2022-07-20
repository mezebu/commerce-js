import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductWrapper = styled(Card)(({ theme }) => ({
  background: "rgba( 255, 255, 255, 0.2 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur (4px)",
  WebkitBackdropFilter: "blur(4px)",
}));
