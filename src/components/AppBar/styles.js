import { styled, createTheme } from "@mui/material/styles";
import { AppBar } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "rgba( 255, 255, 255, 0 )",
  backdropFilter: "blur( 21px )",
  WebkitBackdropFilter: "blur( 21px )",
  borderBottom: `1px solid ${
    theme.palette.mode === "light"
      ? theme.palette.grey[300]
      : theme.palette.grey[800]
  }`,
}));

export const darkMode = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "rgb(27, 38, 53)",
    },
  },
});

export const lightMode = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "rgb(27, 38, 53)",
    },
  },
});
