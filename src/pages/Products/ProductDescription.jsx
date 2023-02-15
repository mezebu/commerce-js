import React, { useState, useEffect } from "react";
import { CardContent, CardMedia, CircularProgress } from "@mui/material";
import { Avatar, Box, Button, Card, CardActions } from "@mui/material";
import { Divider, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import { useCommerce } from "../../contexts/CommerceContext";
import commerce from "../../lib/commerce";

const ProductDescription = () => {
  const navigate = useNavigate();
  const { prodId } = useParams();
  const { handleAddToCart, setLoading, loading } = useCommerce();

  const [productDesc, setProductDesc] = useState({});

  useEffect(() => {
    setLoading(true);
    const handleDescription = async () => {
      try {
        const response = await commerce.products.retrieve(prodId);
        setProductDesc(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    handleDescription();
  }, [prodId, setLoading]);

  const { name, image, description, price, assets, id } = productDesc;

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Card elevation={0} sx={{ maxWidth: "200%" }}>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CardMedia
                component="img"
                sx={{ height: "100%" }}
                image={image?.url}
                alt={name}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ fontWeight: 700 }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    dangerouslySetInnerHTML={{ __html: description }}
                    gutterBottom
                  />
                </Box>
                <Divider />
                <Box sx={{ my: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {price?.formatted_with_symbol}
                  </Typography>
                </Box>
                <Divider />
                {assets && (
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      Available color variants
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      {assets.map((i) => (
                        <Box key={i.id} sx={{ mr: 1, mt: 2 }}>
                          <Avatar
                            alt="Remy Sharp"
                            src={i.url}
                            sx={{ width: 50, height: 50 }}
                            variant="rounded"
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: 5 }}
                  onClick={() => handleAddToCart(id, 1)}
                  disableElevation
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  sx={{ borderRadius: 5 }}
                  onClick={() => navigate("/")}
                  color="success"
                  disableElevation
                >
                  Back to Homepage
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      )}
    </Box>
  );
};

export default ProductDescription;
