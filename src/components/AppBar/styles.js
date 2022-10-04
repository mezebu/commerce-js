import { styled, alpha, createTheme } from "@mui/material/styles";
import { InputBase, AppBar } from "@mui/material";

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

export const Search = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.2),
  },
  marginLeft: 0,
  marginRight: 5,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
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
