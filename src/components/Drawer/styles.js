import { Drawer, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: 400,
    backgroundColor: theme.palette.background.default,
  },
  display: { xs: "block", xl: "none" },
}));

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
