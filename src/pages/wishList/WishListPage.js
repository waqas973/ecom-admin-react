import React, { Fragment } from "react";

import LayoutComponent from "src/shared/components/LayoutComponent";
import SingleWishProductComponent from "src/pages/wishList/components/SingleWishProductComponent";

const WishListPage = () => {
  return (
    <Fragment>
      <LayoutComponent>
        <SingleWishProductComponent />
      </LayoutComponent>
    </Fragment>
  );
};
export default WishListPage;
