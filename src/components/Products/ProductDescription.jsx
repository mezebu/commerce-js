import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";

const ProductDescription = () => {
  let { productId } = useParams();
  const [productDsec, setProductDsec] = useState({});

  console.log(productDsec);

  useEffect(() => {
    const handleDescription = () => {
      commerce.products.retrieve(productId).then((data) => {
        setProductDsec(data);
        console.log(data);
      });
    };

    handleDescription();
  }, [productId]);

  return <div>ProductDescription</div>;
};

export default ProductDescription;
