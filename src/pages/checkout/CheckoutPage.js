import React, { Fragment } from "react";
import LayoutComponent from "src/shared/components/LayoutComponent";
import CheckoutComponent from "./components/CheckoutComponent";

const CheckoutPage = () => {
  return (
    <Fragment>
      <LayoutComponent>
        <CheckoutComponent />
      </LayoutComponent>
    </Fragment>
  );
};

export default CheckoutPage;
