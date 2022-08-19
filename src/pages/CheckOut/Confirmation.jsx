import React from "react";
import { useCommerce } from "../../contexts/CommerceContext";

const Confirmation = () => {
  const { order } = useCommerce();
  console.log(order);

  return (
    <div>
      <>confirmation</>
    </div>
  );
};

export default Confirmation;
