import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import NikeShoe from "../../assets/nike-shoes.png";
import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const HeroCardOne = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: matches ? "column" : "row",
        mb: 1.5,
        p: 2,
        height: matches ? 390 : 275,
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
          transition: "all 250ms ease-in-out",
        },
      }}
    >
      {matches ? (
        <>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              component="img"
              sx={{ width: "40%" }}
              image={NikeShoe}
              alt="Nikes"
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Shoes
              </Typography>
              <Typography sx={{ fontWeight: 700 }} variant="h6">
                Nike Free Run 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Comfy, flexible and easy to wear—the Nike Free Run 2 transforms
                a running staple into a shoe that can go just about anywhere.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" disableElevation>
                  Shop Now
                </Button>
              </Box>
            </CardContent>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Shoes
              </Typography>
              <Typography sx={{ fontWeight: 700 }} variant="h6">
                Nike Free Run 2
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Comfy, flexible and easy to wear—the Nike Free Run 2 transforms
                a running staple into a shoe that can go just about anywhere.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => navigate("/products")}
                >
                  Shop Now
                </Button>
              </Box>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: "40%" }}
            image={NikeShoe}
            alt="Nikes"
          />
        </>
      )}
    </Card>
  );
};

export default HeroCardOne;
