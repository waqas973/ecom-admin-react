import React, { Fragment, useReducer } from "react";

import {
  ProductContext,
  productReducer,
  productState,
} from "src/pages/Products/context/ProductContext";
import AdminLayoutComponent from "src/shared/components/AdminLayoutComponent";
import ProductMenuComponent from "src/pages/Products/components/ProductMenuComponent";
import AllProductComponent from "src/pages/Products/components/AllProductComponent";

const ProductComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <ProductMenuComponent />
      <AllProductComponent />
    </div>
  );
};

const ProductsPages = () => {
  /* To use useReducer make sure that reducer is the first arg */
  const [data, dispatch] = useReducer(productReducer, productState);

  return (
    <Fragment>
      <ProductContext.Provider value={{ data, dispatch }}>
        <AdminLayoutComponent>
          <ProductComponent />
        </AdminLayoutComponent>
      </ProductContext.Provider>
    </Fragment>
  );
};

export default ProductsPages;
