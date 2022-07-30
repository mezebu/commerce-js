import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple, grey } from "@mui/material/colors";

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  border: "1px solid black",
  backgroundColor: grey[100],
  "&:hover": {
    backgroundColor: grey[400],
  },
  padding: 12,
}));
