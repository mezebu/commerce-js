import React, { useEffect, useState } from "react";
import { Box, Card, Container } from "@mui/material";
import { Divider, IconButton, Typography } from "@mui/material";
import { CardContent, Grid, Stack, CardMedia } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useParams } from "react-router-dom";

import { commerce } from "../../lib/commerce";
import { ActionButtons, CartButton, Divide, BuyButton } from "./styles";
import { CenteredFlexItems } from "../../universalStyles";
import { useCommerce } from "../../contexts/CommerceContext";

const ProductDescription = () => {
  let { productId } = useParams();
  const { handleAddToCart } = useCommerce();
  const [productDsec, setProductDsec] = useState({});
  console.log(productDsec);

  const { media, name, price, seo, description, id } = productDsec;

  useEffect(() => {
    const handleDescription = () => {
      commerce.products
        .retrieve(productId)
        .then((data) => {
          setProductDsec(data);
        })
        .catch((error) => console.log("Could not fetch Product", error));
    };

    handleDescription();
  }, [productId]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 5 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Product Detail
          </Typography>
        </Box>
        <Card elevation={0} variant="outlined">
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CardMedia
                component="img"
                sx={{ width: "100%", height: "100%" }}
                image={media?.source}
                alt={name}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    {name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                  >
                    {price?.formatted_with_symbol}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    component="div"
                  >
                    {seo?.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 1 }}>
                  <Divide>
                    <Divider>Description</Divider>
                    <Typography
                      component="span"
                      variant="body2"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  </Divide>
                  <Divider>Actions</Divider>
                  <CenteredFlexItems>
                    <Typography variant="subtitle2">Quantity</Typography>
                    <ActionButtons>
                      <IconButton size="small">
                        <RemoveRoundedIcon sx={{ fontSize: 15 }} />
                      </IconButton>
                      <Typography variant="subtitle2">1</Typography>
                      <IconButton size="small">
                        <AddRoundedIcon sx={{ fontSize: 15 }} />
                      </IconButton>
                    </ActionButtons>
                  </CenteredFlexItems>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}
                  >
                    <Stack spacing={2} direction="row">
                      <CartButton
                        startIcon={<AddShoppingCartIcon />}
                        variant="contained"
                        disableElevation
                        onClick={() => handleAddToCart(id, 1)}
                      >
                        Add to cart
                      </CartButton>
                      <BuyButton variant="contained" disableElevation>
                        Buy now
                      </BuyButton>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default ProductDescription;
