import { Box } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";

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

export const JustifyCenter = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const AlignCenter = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const darkMode = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Montserrat",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 5,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#071121",
      paper: "#0f172a",
    },
  },
});

export const lightMode = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Montserrat",
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 5,
  },
  palette: {
    mode: "light",
    background: {
      default: "#F6F9FC",
    },
    primary: {
      main: "#1fa2ff",
    },
  },
});
