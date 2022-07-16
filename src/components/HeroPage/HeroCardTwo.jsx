import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import shirtImage from "../../assets/shirt.jpg";
import { Button, useMediaQuery, useTheme } from "@mui/material";

const HeroCardTwo = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "40%" }}
              image={shirtImage}
              alt="Live from space album cover"
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Men's Clothing
              </Typography>
              <Typography sx={{ fontWeight: 700 }} variant="h6">
                Comfort Hoodie Jacket
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
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={shirtImage}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Men's Clothing
              </Typography>
              <Typography sx={{ fontWeight: 700 }} variant="h6">
                Comfort Hoodie Jacket
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Zip Up hoodie with color block zippers and fleece lining.
                Oblique Zip on the front,it is fashionable you'll want to wear
                it.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" disableElevation>
                  Shop Now
                </Button>
              </Box>
            </CardContent>
          </Box>
        </>
      )}
    </Card>
  );
};

export default HeroCardTwo;
