import React from "react";
import PropTypes from "prop-types";

const ProductsList = ({ products }) => {
  console.log(products);
  return <div>Products</div>;
};

export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.array,
};
