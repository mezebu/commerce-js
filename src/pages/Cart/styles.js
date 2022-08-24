import { Box, TableCell, tableCellClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#475569",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const ActionButtons = styled(Box)(({ theme }) => ({
  border: "1px solid rgba(145, 158, 171, 0.32)",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 90,
  height: 35,
}));
