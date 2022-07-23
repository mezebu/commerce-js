import { TableCell, tableCellClasses } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: grey[100],
    color: theme.palette.common,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
