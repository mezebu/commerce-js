import React, { useState } from "react";
import { Backdrop, Box, Paper, Button, Modal, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import Fade from "./Fade";
import { ColorButton } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

const FilterModal = ({ sortProducts }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button startIcon={<FilterAltIcon />} onClick={handleOpen}>
        filters
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper sx={style}>
            <ColorButton>test</ColorButton>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Button onClick={sortProducts}> Descending Order</Button>
          </Paper>
        </Fade>
      </Modal>
    </Box>
  );
};

export default FilterModal;
