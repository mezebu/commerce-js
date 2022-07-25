import React, { useEffect, useState } from "react";
import { useCommerce } from "../../contexts/CommerceContext";
import { commerce } from "../../lib/commerce";

const CheckOut = () => {
  const { cart } = useCommerce();

  const [checkOutToken, setCheckOutToken] = useState({});

  console.log(checkOutToken);

  useEffect(() => {
    const getCheckOutToken = async () => {
      if (cart.line_items.length) {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          setCheckOutToken({ token });
        } catch (error) {
          console.log("There was an error generating token", error);
        }
      }
    };

    getCheckOutToken();
  }, [cart]);

  return <div>CheckOut</div>;
};

export default CheckOut;
