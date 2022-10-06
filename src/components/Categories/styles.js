import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  "&:focus": {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800],
  },
}));
