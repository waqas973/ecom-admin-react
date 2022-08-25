import React, { Fragment, useReducer } from "react";

import LayoutComponent from "src/shared/components/LayoutComponent";
import {
  ProductDetailsContext,
  productDetailsReducer,
  productDetailsState,
} from "src/pages/productDetails/context/ProductDetailsContext";
import ProductDetailsSectionComponent from "src/pages/productDetails/components/ProductDetailsSectionComponent";

const ProductDetailsPages = () => {
  const [data, dispatch] = useReducer(
    productDetailsReducer,
    productDetailsState
  );
  return (
    <Fragment>
      <ProductDetailsContext.Provider value={{ data, dispatch }}>
        <LayoutComponent>
          <ProductDetailsSectionComponent />
        </LayoutComponent>
      </ProductDetailsContext.Provider>
    </Fragment>
  );
};

export default ProductDetailsPages;
