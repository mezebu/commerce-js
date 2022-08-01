import React from "react";
import { useCommerce } from "../../contexts/CommerceContext";

const Confirmation = () => {
  const { errorMessage, order } = useCommerce();
  console.log(order);

  if (errorMessage) {
    <>
      <p>{errorMessage}</p>
    </>;
  }
  return (
    <div>
      <>confirmation</>
    </div>
  );
};

export default Confirmation;
