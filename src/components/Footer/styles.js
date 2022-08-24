import { Box, Link, styled, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const Wrapper = styled(Box)(() => ({
  height: 45,
  display: "flex",
  alignItems: "center",
  position: "fixed",
  left: 0,
  bottom: 0,
  right: 0,
  borderTop: "1px thin",
  borderTopColor: grey[50],
}));

export const FooterItems = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const FooterContents = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const FooterText = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
});

export const FooterLinks = styled(Link)({
  fontSize: 14,
  fontWeight: 500,
  "&:hover": {
    color: blue[600],
  },
  ":nth-of-type(1)": {
    marginRight: 20,
  },
});
