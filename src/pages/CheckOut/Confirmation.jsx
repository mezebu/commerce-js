import React from "react";
import { useCommerce } from "../../contexts/CommerceContext";

const Confirmation = () => {
  const { errorMessage, order } = useCommerce();
  console.log(order);

  return (
    <div>
      <>confirmation</>
    </div>
  );
};

export default Confirmation;
