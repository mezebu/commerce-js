import React from "react";
import { Backdrop, Button, Card, CardMedia, Divider } from "@mui/material";
import { CardContent, Modal, Fade, LinearProgress } from "@mui/material";
import { Typography, Box, CardActions } from "@mui/material";
import PropTypes from "prop-types";

import { SpaceBtwFlexItems } from "../../themes/universalStyles";
import { useCommerce } from "../../contexts/CommerceContext";
import { style } from "./styles";

const ProductModal = ({ openModal, handleModalClose, productDescription }) => {
  // prettier-ignore
  const { image, name, price, seo, description, id, inventory } = productDescription;
  const { handleAddToCart } = useCommerce();

  const addToCartHandler = () => {
    handleAddToCart(id, 1);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <Card sx={style}>
          {id && (
            <>
              <CardMedia
                component="img"
                height="200"
                image={image?.url}
                alt={name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" fontWeight={600}>
                  {name}
                </Typography>
                <Typography variant="subtitle2">
                  {price?.formatted_with_symbol}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  {seo?.description}
                </Typography>
                <Box sx={{ my: 1 }}>
                  <Divider>Description</Divider>
                  <Typography
                    component="span"
                    variant="body2"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  {inventory.available > 0 ? <Divider>Actions</Divider> : null}
                  <SpaceBtwFlexItems>
                    {inventory.available > 0 ? (
                      <>
                        <Typography variant="subtitle2">
                          Available Quantity: {inventory.available}
                        </Typography>

                        <Box sx={{ width: "10%" }}>
                          <LinearProgress
                            variant="determinate"
                            value={inventory.available}
                            color={
                              inventory.available < 20 ? "error" : "primary"
                            }
                            sx={{ borderRadius: 5 }}
                          />
                        </Box>
                      </>
                    ) : null}
                  </SpaceBtwFlexItems>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  disableElevation
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </CardActions>
            </>
          )}
        </Card>
      </Fade>
    </Modal>
  );
};

export default ProductModal;

ProductModal.propTypes = {
  productDescription: PropTypes.object.isRequired,
  handleModalClose: PropTypes.func,
  openModal: PropTypes.bool,
};
