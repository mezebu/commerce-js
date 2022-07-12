import { Box, Link, styled, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Wrapper = styled(Box)(() => ({
  background: blue[50],
  height: 40,
  display: "flex",
  alignItems: "center",
}));

export const BannerItems = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const BannerContents = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const BannerText = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
});

export const BannerLinks = styled(Link)({
  fontSize: 14,
  fontWeight: 500,
  color: "black",
  "&:hover": {
    color: blue[600],
  },
  ":nth-of-type(1)": {
    marginRight: 20,
  },
});
