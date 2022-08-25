import React, { Fragment } from "react";

import CategoryListComponent from "src/pages/home/components/CategoryListComponent";
import FilterListComponent from "src/pages/home/components/FilterListComponent";
import SearchComponent from "src/pages/home/components/SearchComponent";

const ProductCategoryDropdownComponent = () => {
  return (
    <Fragment>
      <CategoryListComponent />
      <FilterListComponent />
      <SearchComponent />
    </Fragment>
  );
};

export default ProductCategoryDropdownComponent;
