import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductWrapper = styled(Card)(() => ({
  background: "rgba( 255, 255, 255, 0.2 )",
  backdropFilter: "blur (4px)",
  WebkitBackdropFilter: "blur(4px)",
}));
