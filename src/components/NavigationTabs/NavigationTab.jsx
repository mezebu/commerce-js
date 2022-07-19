import React, { Fragment } from "react";
import { useLocation, matchPath, Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import StoreIcon from "@mui/icons-material/Store";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Box } from "@mui/material";
import FilterModal from "../FilterModal/FilterModal";

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

const NavigationTab = ({ sortProducts }) => {
  const routeMatch = useRouteMatch(["/", "/products", "/trash"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Fragment>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Tabs
          value={currentTab}
          centered
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            icon={<HomeIcon />}
            label="Store"
            value="/"
            to="/"
            component={Link}
          />
          <Tab
            icon={<StoreIcon />}
            label="Products"
            value="/products"
            to="/products"
            component={Link}
          />
          <Tab
            icon={<FavoriteIcon />}
            label="Trash"
            value="/trash"
            to="/trash"
            component={Link}
          />
          <Tab
            icon={<PersonPinIcon />}
            label="Trash"
            value="/trash"
            to="/trash"
            component={Link}
          />
        </Tabs>
        <Box sx={{ ml: 1 }}>
          <FilterModal sortProducts={sortProducts} />
        </Box>
      </Box>
    </Fragment>
  );
};

export default NavigationTab;
